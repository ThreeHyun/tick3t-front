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
  getFanTable: function (fanCd) {
    return api.get(`admin/fan/${fanCd}`);
  },
  getTicketList: function () {
    return api.get(`admin/ticket`);
  },
  getTicketTable: function (concertId) {
    return api.get(`admin/ticket/${concertId}`);
  },
  getUserList: function (pageNo, category, word) {
    return api.get(
      `admin/user?page=${pageNo}&category=${category}&word=${word}`
    );
  },
  getUserDetails: function (userId) {
    return api.get(`admin/user/${userId}`);
  },
  getUserLog: function (userId) {
    return api.get(`admin/log/${userId}`);
  },
};
