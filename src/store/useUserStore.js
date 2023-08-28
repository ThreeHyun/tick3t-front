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
    },
    userList: [],
  }),
  actions: {
    fetchUserData(params) {
      api
        .getUserDetails(params)
        .then((res) => {
          console.log(res);
          this.user = { ...res.data.data.infoDetails[0] };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUserList(pageNo) {
      api
        .getUserList(pageNo)
        .then((res) => {
          this.userList = [...res.data.data.userList];
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
  },
});
