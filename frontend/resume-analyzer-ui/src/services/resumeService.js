import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export const analyzeResume = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/api/resume/analyze`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error calling backend:", error);
    throw error;
  }
};
