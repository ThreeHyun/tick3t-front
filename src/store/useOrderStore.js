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
  }),
  actions: {
    detailOrder(ticketId) {
      api
        .detailOrder(ticketId)
        .then((res) => {
          console.log(res);
          this.ticket = { ...res.data.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cancel(ticketId) {
      api
        .cancel(ticketId)
        .then((res) => {
          console.log("취소 성공");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    payment(ticketId) {
      api
        .payment(ticketId)
        .then((res) => {
          console.log("결제 성공!!");
          console.log(res);
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
