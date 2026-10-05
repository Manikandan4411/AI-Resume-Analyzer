# 🤖 AI Resume Analyzer

An AI-powered full-stack web application that analyzes a resume against a job description and provides an AI-generated compatibility score, matched skills, missing skills, ATS keywords, and actionable improvement suggestions.

The application combines a **React + Vite frontend**, **Spring Boot backend**, and **Google Gemini API** to provide an interactive resume analysis experience.

---

## 📖 Introduction

The **AI Resume Analyzer** helps job seekers understand how closely their resume matches a specific job description.

Users can upload a **PDF resume** and paste a **job description**. The backend processes the resume and job description and sends the relevant content to the **Google Gemini API** for AI-based analysis.

The application then presents the analysis in an easy-to-understand dashboard containing:

- Resume match score
- Resume summary
- Matched skills
- Missing skills
- ATS keywords
- Improvement suggestions

This project demonstrates how **Generative AI can be integrated into a Java Spring Boot full-stack application**.

---

## 🎯 Project Objective

The main objective of this project is to build an intelligent resume analysis system that can:

1. Read resume content from a PDF.
2. Analyze the resume against a job description.
3. Identify relevant technical and professional skills.
4. Detect missing or recommended skills.
5. Identify important ATS keywords.
6. Generate a resume match score.
7. Provide actionable suggestions to improve the resume.

---

## ✨ Features

### 📄 Resume Upload
- Upload a PDF resume.
- Extract resume content for analysis.
- Supports text-based PDF resumes.

### 💼 Job Description Analysis
- Paste a target job description.
- Compare resume content with job requirements.

### 🧠 AI-Powered Analysis
- Uses Google Gemini API.
- Generates structured resume insights.
- Provides an overall match score.

### 📊 Analysis Dashboard
Displays:

- **Score**
- **Summary**
- **Skills**
- **Missing Skills**
- **ATS Keywords**
- **Suggestions**

### 🎨 Responsive UI
- Clean card-based interface.
- Responsive design for desktop and mobile.
- Color-coded analysis sections.

### 🧪 Mock Mode
- Supports mock analysis data when the Gemini API is unavailable or quota is exceeded.
- Allows frontend development and testing without depending completely on the live AI API.

---

## 🖥️ Application Flow

```text
User
  │
  ├── Upload Resume (PDF)
  │
  └── Enter Job Description
          │
          ▼
     React Frontend
          │
          │ REST API
          ▼
    Spring Boot Backend
          │
          ├── PDF Resume Processing
          │
          └── Resume + Job Description
                    │
                    ▼
              Google Gemini API
                    │
                    ▼
              AI Analysis Result
                    │
                    ▼
             Spring Boot Backend
                    │
                    │ JSON Response
                    ▼
              React Frontend
                    │
                    ▼
             Analysis Dashboard
```

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React.js |
| Frontend Build Tool | Vite |
| Styling | CSS |
| Backend | Spring Boot 3 |
| Programming Language | Java 21 |
| AI Integration | Google Gemini API |
| API Communication | REST API |
| Build Tool | Maven |
| Package Manager | npm |
| Icons | React Icons |
| Version Control | Git & GitHub |
| Development IDE | Visual Studio Code |

---

## 📂 Project Structure

```text
ai-resume-analyzer/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/
│   │       │       └── resumeanalyzer/
│   │       │           └── resumeanalyzer/
│   │       │               ├── controller/
│   │       │               │   └── ResumeController.java
│   │       │               │
│   │       │               ├── service/
│   │       │               │   └── ResumeService.java
│   │       │               │
│   │       │               ├── model/
│   │       │               │   └── ResumeResponse.java
│   │       │               │
│   │       │               └── ResumeAnalyzerApplication.java
│   │       │
│   │       └── resources/
│   │           └── application.properties
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ResumeUpload.jsx
│   │   │   ├── JobDescription.jsx
│   │   │   └── ResultCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Analysis.jsx
│   │   │
│   │   ├── services/
│   │   │   └── resumeService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```


---

## ⚙️ Prerequisites

Make sure the following are installed:

- **Java 21**
- **Maven 3.9+**
- **Node.js**
- **npm**
- **Git**
- **Visual Studio Code**
- A **Google Gemini API key**

Check the installed versions:

```bash
java -version
mvn -version
node -v
npm -v
git --version
```

---

# 🚀 Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/manikandan4411/ai-resume-analyzer.git
cd ai-resume-analyzer
```
---

# 🔧 Backend Setup

## 2. Navigate to Backend

```bash
cd backend
```

## 3. Configure Gemini API

Open:

```text
backend/src/main/resources/application.properties
```

Configure the application:

```properties
spring.application.name=resume-analyzer-api
server.port=8080

ai.api.key=YOUR_GEMINI_API_KEY
```

Replace:

```text
YOUR_GEMINI_API_KEY
```

with your Gemini API key.

### ⚠️ Security Warning

**Never upload your real API key to GitHub.**

Do not commit API keys, passwords, tokens, or other secrets to source control.

A safer approach is to provide the API key through an environment variable or external configuration.

---

## 4. Run the Spring Boot Backend

From the `backend` directory:

```bash
mvn spring-boot:run
```

The backend will run on:

```text
http://localhost:8080
```

---

# 💻 Frontend Setup

Open another terminal.

## 5. Navigate to Frontend

From the project root:

```bash
cd frontend
```

## 6. Install Dependencies

```bash
npm install
```

## 7. Configure Environment Variable

Create:

```text
frontend/.env
```

Add:

```env
VITE_API_BASE_URL=http://localhost:8080
```

> Make sure `.env` is included in `.gitignore` if it contains environment-specific or sensitive values.

## 8. Start the React Application

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# 🔄 How the Application Works

### Step 1 — Upload Resume

The user selects a PDF resume from the frontend.

### Step 2 — Enter Job Description

The user pastes the job description for the target position.

### Step 3 — Send Request

The React frontend sends the resume and job description to the Spring Boot REST API.

### Step 4 — Process Resume

The backend processes the uploaded resume and prepares the content for AI analysis.

### Step 5 — Gemini Analysis

The backend sends the relevant resume and job-description information to the Google Gemini API.

### Step 6 — Generate Results

Gemini generates analysis such as:

```text
Score
Summary
Skills
Missing Skills
ATS Keywords
Suggestions
```

### Step 7 — Display Results

The Spring Boot backend returns the result to React as a response, and the frontend displays the information in the analysis dashboard.

---

# 📊 Example Analysis Result

An example result can look like:

```text
Score: 85 / 100

Summary:
Strong Java full-stack profile with REST API experience.

Skills:
Java
Spring Boot
React
SQL

Missing Skills:
Docker
CI/CD

ATS Keywords:
Microservices
Hibernate
JUnit

Suggestions:
Add Docker experience.
Highlight CI/CD pipeline projects.
```

---

# 🧪 Mock Mode

The project includes mock analysis support for development and testing.

Mock mode is useful when:

- Gemini API quota is exceeded.
- The API key is unavailable.
- You are testing the frontend.
- You want to demonstrate the UI without making an AI API request.

This allows the application interface to remain testable independently of the live AI service.

---

# 🐛 Troubleshooting

## CORS Error

If the frontend cannot communicate with the backend, verify that the Spring Boot backend allows requests from the frontend origin.

For local development, the frontend normally runs at:

```text
http://localhost:5173
```

Configure CORS appropriately in the backend.

---

## Gemini API Error

Check:

- API key configuration.
- API availability.
- API quota.
- Model configuration.
- Network connectivity.

If the project supports mock mode, use mock data for UI testing.

---

## PDF Parsing Error

Make sure:

- The uploaded file is actually a PDF.
- The PDF contains selectable text.
- The PDF is not a scanned image without an OCR layer.
- The file is not corrupted.

---

## Backend Port Already in Use

If port `8080` is already being used, change:

```properties
server.port=8080
```

to another available port, for example:

```properties
server.port=8081
```

Then update the frontend environment variable accordingly:

```env
VITE_API_BASE_URL=http://localhost:8081
```

---

### Production Architecture

```text
                   ┌──────────────────┐
                   │   User Browser   │
                   └────────┬─────────┘
                            │
                            ▼
                   ┌──────────────────┐
                   │ React Frontend   │
                   │      Vite        │
                   └────────┬─────────┘
                            │ REST API
                            ▼
                   ┌──────────────────┐
                   │ Spring Boot API │
                   │     Java 21      │
                   └────────┬─────────┘
                            │
                            ▼
                   ┌──────────────────┐
                   │ Google Gemini API│
                   └──────────────────┘
```

---

# 📸 Screenshots

- The following screenshots showcase the AI Resume Analyzer interface and result dashboard.

- They illustrate the upload form, job description input, and AI analysis output in action.

- Each image demonstrates the app’s clean, centered layout and color‑coded result cards for clarity.

---

# 🚀 Future Enhancements

The project can be extended with:

- 📈 Resume-job match progress visualization
- 📄 AI-generated resume improvement report
- 📥 Export analysis as PDF
- 🔍 Detailed ATS analysis
- 📊 Skill-match charts
- 📝 AI-powered resume rewriting
- 🎯 Job-specific resume recommendations
- 📚 Multiple resume comparison
- 👤 User authentication
- 💾 Resume history
- 🗄️ Database integration
- ☁️ Cloud deployment
- 🔐 Spring Security authentication
- ⚡ Streaming AI responses
- 📱 Improved mobile UI

---

# 💡 What This Project Demonstrates

This project demonstrates practical experience in:

- Full-stack application development
- React.js and Vite
- Java 21
- Spring Boot
- REST API development
- PDF processing
- Generative AI integration
- Google Gemini API integration
- JSON-based API communication
- Frontend-backend integration
- Error handling
- Environment configuration
- Git and GitHub
- AI-powered application development

---

# 👨‍💻 Author

**Manikandan S**

Product Engineer | Java Backend Developer | Full-Stack Developer | AI Application Developer

Focused on building applications using:

```text
Java
Spring Boot
React
REST APIs
SQL
Generative AI
Google Gemini API
```

---

# 📜 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project for personal and commercial purposes, subject to the terms of the license.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
