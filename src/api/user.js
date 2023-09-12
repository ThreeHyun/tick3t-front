import { api } from "./instance";

export default {
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
