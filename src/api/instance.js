import axios from "axios";
import { useAuthStore } from "@/store";

const API_URL = import.meta.env.VITE_API_URL;
// axios 인스턴스 생성
export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + useAuthStore().token,
  };
  return config;
});
