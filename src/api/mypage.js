import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + sessionStorage.getItem("token"),
  },
});

export default {
  getProfile: function () {
    return api.get(API_URL + `profile`);
  },
  Password: function () {
    return api.post(API_URL + `profile/password`);
  },
};
