import React from "react";

const JobDescription = ({ jobDescription, setJobDescription }) => {
  return (
    <div className="job-desc-section" style={{ marginTop: "10px" }}>
      <label htmlFor="jobDesc"><strong>Job Description:</strong></label>
      <textarea
        id="jobDesc"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the job description here..."
        style={{ display: "block", marginTop: "5px", width: "100%" }}
      />
    </div>
  );
};

export default JobDescription;
