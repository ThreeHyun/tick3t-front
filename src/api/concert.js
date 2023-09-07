import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer " + sessionStorage.getItem("token"),
    Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5aGsxMjNAZW1haWwuZW1haWwiLCJ1c2VySWQiOjEwMDAyLCJzdGF0dXNDZCI6dHJ1ZSwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY5NDEwMDAzMX0.B0b0a8Ua-bQP069TvSO9Uo1HsRxP34JerMXgkFNwRvtAkFSCnWmMIFqCKNfRJxr4yZi02wXQAxO1jCYdxPmqvQ",
  },
});

export default {
  getConcert: function () {
    return api.get(`concert`);
  },
  detailConcert: function (concertId) { 
    return api.get(API_URL+`concert/${concertId}`);
  },
  orderCheck: function (concertId) { 
    return api.get(API_URL+`order/check/${concertId}`);
  },
  seatCheck: function () { 
    return api.post(API_URL+`order`);
  },

};
