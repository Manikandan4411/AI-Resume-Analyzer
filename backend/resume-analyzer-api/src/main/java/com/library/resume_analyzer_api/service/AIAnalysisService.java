package com.library.resume_analyzer_api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.library.resume_analyzer_api.dto.ResumeAnalysisResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class AIAnalysisService {

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private static final String GEMINI_API_URL =
    "https://generativelanguage.googleapis.com/v1/models/gemini-3.6-flash:generateContent";


    public AIAnalysisService(ObjectMapper objectMapper) {
        this.restTemplate = new RestTemplate();
        this.objectMapper = objectMapper;
    }

    public ResumeAnalysisResponse analyze(String resumeText, String jobDesc) {
        // Build a strict prompt to force JSON output
        String prompt = """
        Analyze this resume against the job description.

        Resume:
        %s

        Job Description:
        %s

        Return ONLY valid JSON with these keys:
        {
          "overallScore": number,
          "summary": string,
          "skills": [string],
          "missingSkills": [string],
          "atsKeywords": [string],
          "suggestions": [string]
        }
        Do not include explanations or markdown — only JSON.
        """.formatted(resumeText, jobDesc);

        // Prepare headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Build request body for Gemini
        Map<String, Object> body = new HashMap<>();
        body.put("contents", List.of(Map.of("parts", List.of(Map.of("text", prompt)))));

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

        // Call Gemini API
        ResponseEntity<Map> response = restTemplate.postForEntity(
                GEMINI_API_URL + "?key=" + geminiApiKey, request, Map.class);

        String content = "";
        try {
            List<Map<String, Object>> candidates = (List<Map<String, Object>>) response.getBody().get("candidates");
            Map<String, Object> contentMap = (Map<String, Object>) candidates.get(0).get("content");
            List<Map<String, Object>> parts = (List<Map<String, Object>>) contentMap.get("parts");
            content = (String) parts.get(0).get("text");
        } catch (Exception e) {
            content = "Error parsing Gemini response: " + e.getMessage();
        }

        // Clean up response if Gemini adds extra text
        if (content != null && !content.trim().startsWith("{")) {
            int startIndex = content.indexOf("{");
            if (startIndex != -1) {
                content = content.substring(startIndex);
            }
        }

        // Parse JSON into DTO
        ResumeAnalysisResponse result;
        try {
            result = objectMapper.readValue(content, ResumeAnalysisResponse.class);
        } catch (Exception e) {
            // Fallback if parsing fails
            result = new ResumeAnalysisResponse();
            result.setSummary(content != null ? content : "No response from Gemini");
            result.setOverallScore(0);
        }

        return result;
    }
}
