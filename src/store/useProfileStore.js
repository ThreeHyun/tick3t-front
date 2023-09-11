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

   
    },
    PwResultCode:"",
    PwMessage:"",
    FanResultCode:"",
    FanMessage:"",
    WDResultCode:"",
    WDMessage:""

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
          //console.log(err.response.data.message);
          
        });
    },
    fetchUpdatePwd(oldPassword, newPassword, newPasswordCheck) {
      return api
        .Password(oldPassword, newPassword, newPasswordCheck)
        .then((res) => {
          //console.log(res.status);
          // alert(res.data.resultCode);
          console.log(res);
          this.PwResultCode=res.data.resultCode;
          this.PwMessage=res.data.message;

        })
        .catch((err) => {
          console.log(err);
          //console.log(err.response.data.message);
          alert("새 로그인 후 다시 시도해주세요.");
        });
    },
    fetchAuthFanId(fanId) {
      return api
        .AuthFan(fanId)
        .then((res) => {
          console.log(res);
          this.FanMessage = res.data.message;
          this.FanResultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
          alert("새 로그인 후 다시 시도해주세요.");
        });
    },
    fetchWithdraw(password) {
      return api
        .withdraw(password)
        .then((res) => {
          console.log(res);
          this.WDMessage = res.data.message;
          this.WDResultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
          alert("새 로그인 후 다시 시도해주세요.");
        });
    },
    setPwResultCode(code) { 
      this.PwResultCode = code;
    },
    setPwMessage(message) {
      this.PwMessage = message;
    },
    setFanResultCode(code) { 
      this.FanResultCode = code;
    },
    setFanMessage(message) {
      this.FanMessage = message;
    },
    setWDResultCode(code) { 
      this.WDResultCode = code;
    },
    setWDMessage(message) {
      this.WDMessage = message;
    },



   
  },
  getters: {
    getProfile(state) {
      return state.user;
    },
  },
});


  