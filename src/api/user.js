import axios from "axios";

// const API_URL = "https://7f6e3e61-64b1-41dd-bb49-bf59df779508.mock.pstmn.io";
const API_URL = "http://192.168.0.69:4000/";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWFpbEBlbWFpbC5lbWFpbCIsInVzZXJJZCI6MSwic3RhdHVzQ2QiOnRydWUsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2OTM1NzQ0MTR9.e-lfF0sjJHyOuv3SJRqsbYb4kKWF1ie-R4kJGBY6QRForPIJf92MxJCkheJniYlwizRbn4FR2qNJ9-5PZT0O6g",
  },
});

export default {
  getFanTable: function (fanCd) {
    return api.get(`admin/fan/${fanCd}`);
  },
  getTicketTable: function (ID) {
    return api.get(`admin/ticket/${ID}`);
  },
  getUserList: function (pageNo) {
    return api.get(`admin/user?page=${pageNo}`);
  },
  getUserDetails: function (userId) {
    return api.get(`admin/user/${userId}`);
  },
  getUserLog: function (userId) {
    return api.get(`admin/log/${userId}`);
  },
};
