package com.library.resume_analyzer_api.controller;

import com.library.resume_analyzer_api.dto.ResumeAnalysisResponse;
import com.library.resume_analyzer_api.service.AIAnalysisService;
import com.library.resume_analyzer_api.service.PdfExtractionService;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")   // ✅ Base path for all endpoints
@CrossOrigin(origins = "http://localhost:5173")
public class ResumeController {

    private final AIAnalysisService aiAnalysisService;
    private final PdfExtractionService pdfExtractionService;

    @Autowired
    public ResumeController(AIAnalysisService aiAnalysisService,
                            PdfExtractionService pdfExtractionService) {
        this.aiAnalysisService = aiAnalysisService;
        this.pdfExtractionService = pdfExtractionService;
    }

    // Root check
    @GetMapping("/")
    public String home() {
        return "AI Resume Analyzer backend is running!";
    }

    // Simple test endpoint
    @GetMapping("/test")
    public String test() {
        return "Backend test endpoint working!";
    }

    // ✅ Resume analysis endpoint (PDF upload + job description)
    @PostMapping("/resume/analyze")
    public ResumeAnalysisResponse analyzeResume(
            @RequestParam("resume") MultipartFile resume,
            @RequestParam("jobDescription") String jobDescription) throws IOException {

        // Extract text from uploaded PDF
        String resumeText = pdfExtractionService.extractText(resume);

        // Call Gemini analysis
        return aiAnalysisService.analyze(resumeText, jobDescription);
    }
}
