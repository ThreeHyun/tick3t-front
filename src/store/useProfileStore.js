import { defineStore } from "pinia";
import api from "@/api/mypage";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    user: {
      id: "",
      email: "",
      name: "",
      birth: "",
      fanId: "",
      oldPassword: "",
      newPassword: "",
      newPasswordCheck: "",
      password: "",
      message: "",
      resultCode: "",
    },
  }),
  actions: {
    fetchUserData(id) {
      api
        .getProfile(id)
        .then((res) => {
          console.log(res);
          this.user = { ...res.data.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUpdatePwd(oldPassword, newPassword, newPasswordCheck) {
      api
        .Password(oldPassword, newPassword, newPasswordCheck)
        .then((res) => {
          console.log(res.status);
          // alert(res.data.resultCode);
          console.log(res);
          this.user.message = res.data.message;
          this.user.resultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAuthFanId(fanId) {
      api
        .AuthFan(fanId)
        .then((res) => {
          console.log(res);
          this.user.message = res.data.message;
          this.user.resultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchWithdraw(password) {
      api
        .withdraw(password)
        .then((res) => {
          console.log(res);
          this.user.message = res.data.message;
          this.user.resultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAuthFanId(fanId) {
      api
        .AuthFan(fanId)
        .then((res) => {
          console.log(res);
          this.user.message = res.data.message;
          this.user.resultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchWithdraw(password) {
      api
        .withdraw(password)
        .then((res) => {
          console.log(res);
          this.user.message = res.data.message;
          this.user.resultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getProfile(state) {
      return state.user;
    },
  },
});
