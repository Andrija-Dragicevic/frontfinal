import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://e23b-89-188-33-34.ngrok-free.app',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});