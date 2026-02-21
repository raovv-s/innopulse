import axios from 'axios';

// Backend-in ana ünvanı (FastAPI uvicorn-un işlədiyi port)
const API_BASE_URL = "http://127.0.0.1:8000/api/startups";

export const api = {
  /**
   * 1. Bütün startapları bazadan çəkmək üçün
   */
  getStartups: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/`);
      return response.data;
    } catch (error) {
      console.error("Məlumatlar gətirilərkən xəta:", error);
      return [];
    }
  },

  /**
   * 2. Yeni startap əlavə etmək üçün
   */
  createStartup: async (startupData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/`, startupData);
      return response.data;
    } catch (error) {
      console.error("Startap yaradılarkən xəta:", error);
      throw error;
    }
  },

  /**
   * 3. Real AI Analizini başlatmaq üçün
   * Sənin Dashboard-dakı düymə buna bağlanacaq
   */
  analyzeStartup: async (startupId) => {
    console.log("Real AI Analiz başladılır... ID:", startupId);
    try {
      // Bizim backend-dəki /analyze endpoint-ini çağırırıq
      const response = await axios.post(`${API_BASE_URL}/${startupId}/analyze`);
      
      // Frontend-in gözlədiyi formata uyğunlaşdırırıq (Mapping)
      return {
        score: response.data.health_score,
        status: response.data.status,
        insights: response.data.ai_recommendation
      };
    } catch (error) {
      console.error("AI Analiz xətası:", error);
      return {
        score: 0,
        status: "Error",
        insights: "Backend bağlantısı qurulmadı və ya AI cavab vermədi."
      };
    }
  }
};
