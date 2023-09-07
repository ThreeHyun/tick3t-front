import { defineStore } from "pinia";
import api from "@/api/concert";

export const concertStore = defineStore("concert", {
  state: () => ({
    concert: {
      concertId: 0,
      title: "",
      date: "",
      location: "",
      hallName:"",
      startDate:"",
      imgUrl: "",

      grade:"",
      price:0,
      remainSeat:0,
      totalSeat:0


    },
    concertList: [],
    seats:[],
    orderResultCode: "",
    orderMessage:"",
    detailResultCode: "", 
    detailMessage: "",
    
  }),
  actions: {
    fetchConcertList() {
      api
        .getConcert()
        .then((res) => {
          console.log(res);
          this.concertList = [...res.data.data];
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
    detailConcert(concertId) {
      api
        .detailConcert(concertId)
        .then((res) => {
          console.log(res);
          this.concert = { ...res.data.data };
          this.detailResultCode = res.data.resultCode;
          this.detailMessage = res.data.message;
          this.seats={...res.data.data.seats}
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchOrderCheck(concertId){
      api
        .orderCheck(concertId)
        .then((res) => {
          console.log(res);
          this.orderMessage = res.data.message;
          this.orderResultCode = res.data.resultCode;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  getters: {
    getConcertDetails(state) {
      return state.concert;
    },
  },
}
});
