import { defineStore } from "pinia";
import api from "@/api/board";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      birth: "",
      createDate: "",
      email: "",
      fanId: "",
      fanCd: "",
      userId: "",
      name: "",
      statusCd: "",
      logId: "",
      accessIP: "",
      logCreateDate: "",
      statusCode: "",
    },
    userList: [],
    logs: [],
  }),
  actions: {
    fetchUserList(pageNo) {
      api
        .getUserList(pageNo)
        .then((res) => {
          console.log(res);
          this.userList = [...res.data.data.userList];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUserData(params) {
      api
        .getUserDetails(params)
        .then((res) => {
          console.log(res);
          this.user = { ...res.data.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUserLog(params) {
      api
        .getUserLog(params)
        .then((res) => {
          console.log(res);
          this.logs = { ...res.data.data.logs };
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getUserDetails(state) {
      return state.user;
    },
    getUserLog(state) {
      return state.user;
    },
  },
});
