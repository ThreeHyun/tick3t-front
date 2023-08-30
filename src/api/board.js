import axios from "axios";

//const API_URL = "http://192.168.0.122:4000/";
const API_URL = "http://192.168.0.122:4000/";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWFpbEBlbWFpbC5lbWFpbCIsInVzZXJJZCI6MSwic3RhdHVzQ2QiOnRydWUsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2OTMzMzQ2MjF9.YvMz2j7jgBbr_hwteUnztpVQK4vNDA1XMCfJi_CNh66TtO5wEtHm8-qwFcYYC9B4CfgN9tTDtXzFik1QSQ2RMA",
  },
});

export default {
  getUserList: function () {
    return api.get(`admin/user?page=2`);
  },
  getUserDetails: function (userId) {
    return api.get(`admin/user/${userId}`);
  },
};
