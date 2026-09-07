import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import { analyzeResume } from "./services/resumeService";

const App = () => {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const onFileChange = (e) => setFile(e.target.files[0]);

  const onAnalyze = async () => {
    if (!file || !jobDesc.trim()) {
      alert("Please upload a resume and enter job description.");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jobDesc); // ✅ match backend param name

    try {
      const data = await analyzeResume(formData);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      {!result ? (
        <Home
          onFileChange={onFileChange}
          jobDesc={jobDesc}
          setJobDesc={setJobDesc}
          onAnalyze={onAnalyze}
          loading={loading}
        />
      ) : (
        <Analysis result={result} />
      )}
    </div>
  );
};

export default App;
