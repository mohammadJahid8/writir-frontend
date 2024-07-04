import axios from "axios";

// const API_BASE_URL = 'http://localhost:5000/api/v1';
const API_BASE_URL = 'https://rantir-backend.vercel.app/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;