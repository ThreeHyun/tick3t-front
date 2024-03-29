import { defineStore } from "pinia";
import api from "@/api/concert";
import api2 from "@/api/concert2";
export const useConcertStore = defineStore("concert", {
  state: () => ({
    concert: {
      concertId: 0,
      title: "",
      date: "",
      location: "",
      hallName: "",
      startDate: "",
      imgUrl: "",
      calUrl: "",

      ticketId: 0,

      grade: "",
      gradeId: 0,
      price: 0,
      remainSeat: 0,
      totalSeat: 0,
    },
    concertList: [],
    seats: [],
    orderResultCode: "",
    orderMessage: "",
    detailResultCode: "",
    detailMessage: "",
    seatMessage: "",
    seatResultCode: "",
  }),
  actions: {
    fetchConcertList() {
      api2
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
      api2
        .detailConcert(concertId)
        .then((res) => {
          console.log(res);
          this.concert = { ...res.data.data };
          this.detailResultCode = res.data.resultCode;
          this.detailMessage = res.data.message;
          this.seats = { ...res.data.data.seats };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchOrderCheck(concertId) {
      await api
        .orderCheck(concertId)
        .then((res) => {
          console.log(res);
          this.orderMessage = res.data.message;
          this.orderResultCode = res.data.resultCode;
        })
        .catch((err) => {
          this.orderMessage = err.response.data.message;
          this.orderResultCode = err.response.data.resultCode;
          console.log(err);
        });
    },
    async fetchSeatCheck(ticketId, concertId, gradeId, totalSeat, price) {
      await api
        .seatCheck(ticketId, concertId, gradeId, totalSeat, price)
        .then((res) => {
          console.log(res);
          this.concert.ticketId = res.data.data.ticketId;
          this.seatMessage = res.data.message;
          this.seatResultCode = res.data.resultCode;
        })
        .catch((err) => {
          this.seatMessage = err.response.data.message;
          this.seatResultCode=err.response.data.resultCode;
          console.log(err);
        });
    },
    getters: {
      getConcertDetails(state) {
        return state.concert;
      },
    },
  },
});
