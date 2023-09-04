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
    },
  }),
  actions: {
    fetchUserData(id) {
      //회원 정보 api 요청 보내기
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
    fetchUpdatePwd() {
      api
        .Password("password1!", "password2!", "password2!")
        .then((res) => {
          console.log(res.status);
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
