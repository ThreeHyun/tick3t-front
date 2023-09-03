import { defineStore } from "pinia";
import api from "@/api/order";

export const useOrderStore = defineStore("order", {
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
    },
    resultCode: "",
    message: "",
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
        });
    },
    payment(ticketId) {
      api
        .payment(ticketId)
        .then((res) => {
          console.log(res);
          this.resultCode = res.data.resultCode;
          this.message = res.data.message;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getTicketDetails(state) {
      return state.ticket;
    },
  },
});
