import axios from 'axios';

// Backend-in ünvanı
const API_URL = "http://127.0.0.1:8000/api/startups";

export const api = {
  // Bütün startapları bazadan çəkmək
  getStartups: async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      return response.data;
    } catch (error) {
      console.error("Məlumatları çəkərkən xəta:", error);
      return [];
    }
  },

  // Yeni startap əlavə etmək
  createStartup: async (startupData) => {
    const response = await axios.post(`${API_URL}/`, startupData);
    return response.data;
  },

  // Real AI Analizini başlatmaq (Dashboard-dakı düymə üçün)
  analyzeStartup: async (startupId) => {
    console.log("Real AI Analiz başladılır... ID:", startupId);
    try {
      const response = await axios.post(`${API_URL}/${startupId}/analyze`);
      // Frontend-in gözlədiyi formata uyğunlaşdırırıq
      return {
        score: response.data.health_score,
        status: response.data.status,
        insights: response.data.ai_recommendation
      };
    } catch (error) {
      console.error("AI Analiz xətası:", error);
      throw error;
    }
  }
};