package com.library.resume_analyzer_api.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AIConfig {

    @Value("${ai.api.url:http://localhost:11434/api/generate}")
    private String apiUrl;

    public String getApiUrl() {
        return apiUrl;
    }
}
