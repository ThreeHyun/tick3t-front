import axios from "axios";

const API_URL = "https://7f6e3e61-64b1-41dd-bb49-bf59df779508.mock.pstmn.io/";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${window.sessionStorage.getItem("token")}`,
  },
});

export default {
  getUserList: function (pageNo) {
    return api.get(`admin?page=${pageNo}`);
  },
  getUserDetails: function (userId) {
    return api.get(`admin/user/${userId}`);
  },
};
