package com.library.resume_analyzer_api.dto;

import java.util.List;

public class ResumeAnalysisResponse {
    private int overallScore;
    private String summary;
    private List<String> skills;
    private List<String> missingSkills;
    private List<String> atsKeywords;
    private List<String> suggestions;

    // Default constructor
    public ResumeAnalysisResponse() {}

    // All-args constructor (optional, useful for testing)
    public ResumeAnalysisResponse(int overallScore, String summary,
                                  List<String> skills, List<String> missingSkills,
                                  List<String> atsKeywords, List<String> suggestions) {
        this.overallScore = overallScore;
        this.summary = summary;
        this.skills = skills;
        this.missingSkills = missingSkills;
        this.atsKeywords = atsKeywords;
        this.suggestions = suggestions;
    }

    // Getters and Setters
    public int getOverallScore() { return overallScore; }
    public void setOverallScore(int overallScore) { this.overallScore = overallScore; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public List<String> getSkills() { return skills; }
    public void setSkills(List<String> skills) { this.skills = skills; }

    public List<String> getMissingSkills() { return missingSkills; }
    public void setMissingSkills(List<String> missingSkills) { this.missingSkills = missingSkills; }

    public List<String> getAtsKeywords() { return atsKeywords; }
    public void setAtsKeywords(List<String> atsKeywords) { this.atsKeywords = atsKeywords; }

    public List<String> getSuggestions() { return suggestions; }
    public void setSuggestions(List<String> suggestions) { this.suggestions = suggestions; }

    // toString() for debugging/logging
    @Override
    public String toString() {
        return "ResumeAnalysisResponse{" +
                "overallScore=" + overallScore +
                ", summary='" + summary + '\'' +
                ", skills=" + skills +
                ", missingSkills=" + missingSkills +
                ", atsKeywords=" + atsKeywords +
                ", suggestions=" + suggestions +
                '}';
    }
}
