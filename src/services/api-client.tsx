import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  params: {
    key: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default apiClient;
