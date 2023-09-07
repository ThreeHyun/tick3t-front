import { defineStore } from "pinia";
import api from "@/api/dashboard";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    dashboard: {
      joinUser: "",
      withdrawUser: "",
      nowUser: "",
      weekUser: "",
      rowNum: "",
      concertId: "",
      title: "",
      salesRate: "",
      totalSeat: "",
      soldSeat: "",
      remainSeat: "",
    },
    concerts: [],
  }),

  actions: {
    fetchFanTable(fanCd) {
      api
        .getFanTable(fanCd)
        .then((res) => {
          console.log(res);
          this.dashboard = { ...res.data.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchTicketList() {
      api
        .getTicketList()
        .then((res) => {
          console.log(res);
          this.concerts = [...res.data.data];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchTicketTable(concertId) {
      api
        .getTicketTable(concertId)
        .then((res) => {
          console.log(res);
          this.dashboard = { ...res.data.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
