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
        });
    },
    fetchAuthFanId(fanId) {
      api
        .AuthFan(fanId)
        .then((res) => {
          console.log(res);
          this.FanMessage = res.data.message;
          this.FanResultCode = res.data.resultCode;
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
          this.WDMessage = res.data.message;
          this.WDResultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setPwResultCode(code) { 
      this.PwResultCode = code;
    },
    setPwMessage(message) {
      console.log("pwMessage 변경")
      this.PwMessage = message;
      console.log(this.PwMessage)
    },


   
  },
  getters: {
    getProfile(state) {
      return state.user;
    },
  },
});


  