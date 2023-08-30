import { defineStore } from "pinia";
import api from "@/api/board";

export const useProfile = defineStore("user", {
  state: () => ({
    user: {
        id: "",
      email: "",
      name: "",
      birth: "",
      fanId: "",  
    },
    
  }),
  actions: {
    fetchUserData(id) {
      api
        .getProfile(id)
        .then((res) => {
          console.log(res);
          this.user={ ...res.data.data};
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
  }
});
