import { api } from "./instance";

export default {
  getProfile: function () {
    return api.get(`profile`);
  },
  Password: function (oldPassword, newPassword, newPasswordCheck) {
    return api.post(`profile/password`, {
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
    return api.get(`myorder?page=${pageNo}&category=${category}&word=${word}`, {
      pageNo: pageNo,
      category: category,
      word: word,
    });
  },
};
