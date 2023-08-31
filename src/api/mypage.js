import axios from "axios";

//const API_URL = "http://192.168.0.122:4000/";
const API_URL = "http://192.168.0.124:4000/";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWFpbEBlbWFpbC5lbWFpbCIsInVzZXJJZCI6MSwic3RhdHVzQ2QiOnRydWUsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2OTM0ODUzODF9.Te4pi6HKpSBmLQN_IMD3qI8FrgfAQjGNyIusdg5rvidnRowPzqGiQUh_N-t_g6mJ9DscSp1RlwNXQQZ2qMvJWg"
  },
});

export default {
  getProfile: function(){
    return api.get(API_URL + `profile`);
  },
  Password: function () {
    return api.post(API_URL + `profile/password`);
  },
  
};
