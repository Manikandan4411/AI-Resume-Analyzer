package com.library.resume_analyzer_api.dto;

public class ResumeAnalysisRequest {
    private String jobDescription;
    private String resumeText;

    // Default constructor
    public ResumeAnalysisRequest() {}

    // All-args constructor (optional)
    public ResumeAnalysisRequest(String jobDescription, String resumeText) {
        this.jobDescription = jobDescription;
        this.resumeText = resumeText;
    }

    // Getters and Setters
    public String getJobDescription() { return jobDescription; }
    public void setJobDescription(String jobDescription) { this.jobDescription = jobDescription; }

    public String getResumeText() { return resumeText; }
    public void setResumeText(String resumeText) { this.resumeText = resumeText; }
}
