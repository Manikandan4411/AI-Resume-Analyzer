import React, { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { analyzeResume } from "../services/resumeService";
import JobDescription from "./JobDescription";

const ResumeUpload = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile || !jobDescription.trim()) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    setLoading(true);
    try {
      // Mock data for frontend testing
      const mockData = {
        overallScore: 85,
        summary: "Strong Java full-stack profile with REST API experience.",
        skills: ["Java", "Spring Boot", "React", "SQL"],
        missingSkills: ["Docker", "CI/CD"],
        atsKeywords: ["Microservices", "Hibernate", "JUnit"],
        suggestions: [
          "Add Docker experience",
          "Highlight CI/CD pipeline projects",
        ],
      };
      setResult(mockData);
    } catch (error) {
      console.error("Error analyzing resume:", error);
      alert("Failed to analyze resume. Please check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setResumeFile(null);
    setJobDescription("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      {!result && (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            padding: "40px",
            width: "90%",
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "25px", color: "#333" }}>
            AI Resume Analyzer
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="resume" style={{ fontWeight: "bold" }}>
              <FaFileUpload style={{ marginRight: "8px" }} />
              Upload Resume (PDF):
            </label>
            <input
              type="file"
              id="resume"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{
                marginTop: "10px",
                width: "100%",
                textAlign: "center",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label htmlFor="jobDesc" style={{ fontWeight: "bold" }}>
              Job Description:
            </label>
            <textarea
              id="jobDesc"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              style={{
                display: "block",
                marginTop: "8px",
                width: "100%",
                height: "100px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px",
                resize: "none",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              padding: "12px 25px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
            }}
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </form>
      )}

      {result && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              padding: "30px",
              width: "80%",
              maxWidth: "700px",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "20px", color: "#333" }}>
              Analysis Result
            </h2>

            {/* ✅ Card Layout for Result Display */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#e8f0fe",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ color: "#007bff" }}>Score</h3>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {result.overallScore} / 100
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#fef7e8",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ color: "#ff9800" }}>Summary</h3>
                <p>{result.summary}</p>
              </div>

              <div
                style={{
                  backgroundColor: "#e8f5e9",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ color: "#4caf50" }}>Skills</h3>
                <p>{result.skills?.join(", ")}</p>
              </div>

              <div
                style={{
                  backgroundColor: "#ffebee",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ color: "#f44336" }}>Missing Skills</h3>
                <p>{result.missingSkills?.join(", ")}</p>
              </div>

              <div
                style={{
                  backgroundColor: "#e3f2fd",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ color: "#2196f3" }}>ATS Keywords</h3>
                <p>{result.atsKeywords?.join(", ")}</p>
              </div>

              <div
                style={{
                  backgroundColor: "#f3e5f5",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ color: "#9c27b0" }}>Suggestions</h3>
                <p>{result.suggestions?.join(", ")}</p>
              </div>
            </div>

            <button
              style={{
                marginTop: "20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleReset}
            >
              Analyze Another Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
