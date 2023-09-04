import { defineStore } from "pinia";
import api from "@/api/user";

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
      joinUser: "",
      withdrawUser: "",
      nowUser: "",
      weekUser: "",
      ID: "",
      totalSeat: "",
      soldSeat: "",
      remainSeat: "",
      salesRateL: "",
    },
    userList: [],
    logs: [],
    totalPage: 5,
  }),
  actions: {
    fetchFanTable(fanCd) {
      api
        .getFanTable(fanCd)
        .then((res) => {
          console.log(res);
          this.user = [...res.data.data];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchTicketTable(ID) {
      api
        .getTicketTable(ID)
        .then((res) => {
          console.log(res);
          this.user = [...res.data.data];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUserList(pageNo, category = "", word = "") {
      api
        .getUserList(pageNo, category, word)
        .then((res) => {
          console.log(res);
          this.userList = [...res.data.data.userList];
          this.totalPage = res.data.data.totalPage;
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
