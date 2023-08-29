import { defineStore } from "pinia";
import api from "@/api/auth";

export const useAuthStore = defineStore("user", {
  state: () => ({
    token: window.sessionStorage.getItem("token") || "",
  }),
  actions: {
    signup(email, userPwd, name, birth, fanCd) {
      api
        .signup(email, userPwd, name, birth, fanCd)
        .then((res) => {
          console.log("회원가입 성공!!");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login(email, password) {
      api
        .login(email, password)
        .then((res) => {
          console.log(res);
          this.token = res.data.Authorization;
          window.sessionStorage.setItem("token", this.token);
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
