package com.library.resume_analyzer_api.service;

import com.library.resume_analyzer_api.dto.ResumeAnalysisResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ResumeService {

    private final PdfExtractionService pdfExtractionService;
    private final AIAnalysisService aiAnalysisService;

    public ResumeService(PdfExtractionService pdfExtractionService, AIAnalysisService aiAnalysisService) {
        this.pdfExtractionService = pdfExtractionService;
        this.aiAnalysisService = aiAnalysisService;
    }

    public ResumeAnalysisResponse analyzeResume(MultipartFile resume, String jobDesc) {
        if (resume.isEmpty() || !resume.getOriginalFilename().endsWith(".pdf")) {
            throw new IllegalArgumentException("Invalid file type. Please upload a PDF resume.");
        }

        String extractedText = pdfExtractionService.extractText(resume);
        return aiAnalysisService.analyze(extractedText, jobDesc);
    }
}
