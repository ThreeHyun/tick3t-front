import axios from "axios";

//const API_URL = "http://192.168.0.122:4000/";
const API_URL = "http://192.168.0.124:4000/";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWFpbEBlbWFpbC5lbWFpbCIsInVzZXJJZCI6MSwic3RhdHVzQ2QiOnRydWUsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2OTM0ODc3ODl9.xmOad3POBgZ_vKNjslsVuiLA1eFz2HDd8Wd_1QO8U6tNhD9axZWu_1M4EibNyzhOUauqN_QSZQMwEy7eYZFFuQ",
  },
});

export default {
  getUserList: function (pageNo) {
    return api.get(`admin/user?page=${pageNo}`);
  },
  getUserDetails: function (userId) {
    return api.get(`admin/user/${userId}`);
  },
  getProfile: function () {
    return axios.get(API_URL + `profile`);
  },
  getUserLog: function (userId) {
    return api.get(`admin/log /${userId}`);
  },
};
