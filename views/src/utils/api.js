import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const googleWebService = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  params: {
    key: process.env.REACT_APP_GOOGLE_API_KEY,
  },
  headers: { 'Content-Type': 'application/json' },
});
