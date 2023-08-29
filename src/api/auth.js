import axios from "axios";

// const API_URL = "https://7f6e3e61-64b1-41dd-bb49-bf59df779508.mock.pstmn.io/";
const API_URL = "http://192.168.0.83:4000/";

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
  logout: function () {
    return api.post(`logout`, {});
  },
};
