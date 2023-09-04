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
  getConcert: function () {
    return api.get(API_URL + `concert`);
  },
};
