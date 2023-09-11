import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  signup: function (email, userPwd, name, birth, fanCd) {
    return api.post(`signup`, {
      email: email,
      userPwd: userPwd,
      name: name,
      birth: birth,
      fanCd: fanCd,
    });
  },
  login: function (email, userPwd) {
    return api.post(`login`, { email: email, userPwd: userPwd });
  },
  logout: function (token) {
    return api.post(
      `logout`,
      {},
      { headers: { Authorization: "Bearer " + token } }
    );
  },
  findPwd: function (email, name, birth) {
    return api.post(API_URL + `reset-password`, {
      email: email,
      name: name,
      birth: birth,
    });
  },
  checkAuth: function () {
    return api.get("auth", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });
  },
};
