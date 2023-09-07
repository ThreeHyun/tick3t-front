import { defineStore } from "pinia";
import api from "@/api/concert";

export const concertStore = defineStore("concert", {
  state: () => ({
    concert: {
      id: "",
      title: "",
      date: "",
      location: "",
    },
    concertList: [],
  }),
  actions: {
    fetchConcertData(params) {
      api
        .getConcertDetails(params)
        .then((res) => {
          console.log(res);
          this.concert = { ...res.data.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchConcertList(pageNo) {
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
  },
  getters: {
    getConcertDetails(state) {
      return state.concert;
    },
  },
});
