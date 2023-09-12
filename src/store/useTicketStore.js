import { defineStore } from "pinia";
import api from "@/api/order";

export const useTicketStore = defineStore("ticket", {
  state: () => ({
    ticket: {
      ticketId: 0,
      title: "",
      location: "",
      datetime: "",
      seat: "",
      price: 0,
      cancelDate: "",
      payDate: "",
      payState: 0,
      imgUrl: "",
    },
    resultCode: "",
    message: "",
    payResultCode: "",
  }),
  actions: {
    detailOrder(ticketId) {
      api
        .detailOrder(ticketId)
        .then((res) => {
          console.log(res);
          this.ticket = { ...res.data.data };
          this.resultCode = res.data.resultCode;
          this.message = res.data.message;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cancel(ticketId) {
      api
        .cancel(ticketId)
        .then((res) => {
          console.log(res);
          this.resultCode = res.data.resultCode;
          this.message = res.data.message;
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    },
    async payment(ticketId) {
      await api
        .payment(ticketId)
        .then((res) => {
          console.log(res);
          this.payResultCode = res.data.resultCode;
          this.message = res.data.message;
        })
        .catch((err) => {
          console.log(err);
          this.payResultCode = err.response.data.resultCode;
          alert(err.response.data.message);
        });
    },
  },
  getters: {
    getTicketDetails(state) {
      return state.ticket;
    },
  },
});
