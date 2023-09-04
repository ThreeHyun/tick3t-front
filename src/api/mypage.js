import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWFpbEBlbWFpbC5lbWFpbCIsInVzZXJJZCI6MSwic3RhdHVzQ2QiOnRydWUsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2OTM0ODUzODF9.Te4pi6HKpSBmLQN_IMD3qI8FrgfAQjGNyIusdg5rvidnRowPzqGiQUh_N-t_g6mJ9DscSp1RlwNXQQZ2qMvJWg",
  },
});

export default {
  getProfile: function () {
    return api.get(API_URL + `profile`);
  },
  Password: function (oldPassword, newPassword, newPasswordCheck) {
    return api.post(API_URL + `profile/password`, {
      oldPassword: oldPassword,
      newPassword: newPassword,
      newPasswordCheck: newPasswordCheck,
    });
  },
  AuthFan: function (fanId) {
    return api.post(API_URL + `profile/fanId`, { fanId: fanId });
  },
  withdraw: function (password) {
    return api.post(API_URL + `profile/withdraw`, { password: password });
  },
  getMyorder: function (pageNo) {
    return api.get(API_URL + `myorder?page=${pageNo}`);
  },
};
