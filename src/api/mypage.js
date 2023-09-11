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
  Password: function (oldPassword, newPassword, newPasswordCheck) {
    return api.post(API_URL + `profile/password`, {
      oldPassword: oldPassword,
      newPassword: newPassword,
      newPasswordCheck: newPasswordCheck,
    });
  },
  AuthFan: function (fanId) {
    return api.post(`profile/fanId`, { fanId: fanId });
  },
  withdraw: function (password) {
    return api.post(`profile/withdraw`, { password: password });
  },
  getMyorder: function (pageNo, category, word) {
    return api.get(
      API_URL + `myorder?page=${pageNo}&category=${category}&word=${word}`,
      { pageNo: pageNo, category: category, word: word }
    );
  },
};
