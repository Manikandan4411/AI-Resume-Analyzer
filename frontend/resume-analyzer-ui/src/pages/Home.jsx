import React from "react";
import { FaSpinner } from "react-icons/fa";

const Home = ({ onFileChange, jobDesc, setJobDesc, onAnalyze, loading }) => {
  return (
    <div className="home" style={{ padding: "20px" }}>
      <h2>AI Resume Analyzer</h2>

      <div className="upload-section">
        <label htmlFor="resume">Upload Resume (PDF):</label>
        <input
          type="file"
          id="resume"
          accept="application/pdf"
          onChange={onFileChange}
        />

        <div className="job-desc-section" style={{ marginTop: "10px" }}>
          <label htmlFor="jobDesc"><strong>Job Description:</strong></label>
          <textarea
            id="jobDesc"
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            placeholder="Paste the job description here..."
            style={{ display: "block", marginTop: "5px", width: "100%" }}
          />
        </div>

        <button onClick={onAnalyze} disabled={loading} style={{ marginTop: "10px" }}>
          {loading ? (
            <span>
              <FaSpinner className="spinner" /> Analyzing...
            </span>
          ) : (
            "Analyze Resume"
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;
