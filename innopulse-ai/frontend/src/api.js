import axios from 'axios';

// Backend-in ünvanı
const API_URL = "http://127.0.0.1:8000/api/startups";

export const api = {
  // Bütün startapları NeonDB-dən çəkirik
  getStartups: async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      
      // Backend (health_score) -> Frontend (score) çevirməsi (Mapping)
      return response.data.map(item => ({
        ...item,
        score: item.health_score, // Frontend 'score' gözləyir
        insight: item.ai_recommendation, // Frontend 'insight' gözləyir
        repo: item.github_url, // Frontend 'repo' gözləyir
        techStack: item.tech_stack ? item.tech_stack.split(',') : [], // String-i massivə çeviririk
        // Digər sahələr üçün boş dəyərlər (UI qırılmasın deyə)
        history: [item.health_score, item.health_score - 5, item.health_score + 2],
        milestones: []
      }));
    } catch (error) {
      console.error("NeonDB-dən data çəkilərkən xəta:", error);
      return [];
    }
  },

  // Analiz düyməsi üçün
  analyzeStartup: async (id) => {
    const response = await axios.post(`${API_URL}/${id}/analyze`);
    return response.data;
  }
};