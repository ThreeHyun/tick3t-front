import { defineStore } from "pinia";
import api from "@/api/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    auth: {
      name: "",
      email: "",
      birth: "",
      message: "",
      resultCode: "",
    },
    token: window.sessionStorage.getItem("token") || "",
    role: "",
  }),
  getters: {
    isAuthenticated() {
      return this.token !== ""; // token이 존재하면 로그인된 것으로 판단
    },
  },
  actions: {
    signup(email, userPwd, name, birth, fanCd) {
      api
        .signup(email, userPwd, name, birth, fanCd)
        .then(() => {
          console.log("회원가입 성공!!");
          alert("회원가입이 완료되었습니다.");
          location.href = "/login";
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err);
        });
    },
    login(email, userPwd) {
      return api
        .login(email, userPwd)
        .then((res) => {
          this.token = res.data.data.accessToken;
          this.role = res.data.data.role;
          window.sessionStorage.setItem("token", this.token);
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err.response.data.message);
        });
    },
    logout() {
      sessionStorage.removeItem("token");
      this.token = "";
      // return api
      //   .logout(this.token)
      //   .then(() => {
      //     console.log("로그아웃 성공");
      //     sessionStorage.removeItem("token");
      //     this.token = "";
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    findPwd(email, name, birth) {
      api
        .findPwd(email, name, birth)
        .then((res) => {
          // console.log(res.status);
          console.log(res);
          this.auth.message = res.data.message;
          this.auth.resultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async checkAuth() {
      return api
        .checkAuth()
        .then((res) => {
          this.role = res.data.data.role;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
