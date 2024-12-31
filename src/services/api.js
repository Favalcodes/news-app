import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

export const login = (params) => api.post('/login', params);
export const register = (params) => api.post('/register', params);
export const fetchNews = (params) => api.get('/news', { params });
export const updatePreferences = (preferences) => api.post('/preferences', preferences);
export const fetchPreferences = () => api.get('/preferences');
