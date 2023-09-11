import { defineStore } from "pinia";
import api from "@/api/mypage";

export const useOrderStore = defineStore("order", {
  state: () => ({
    order: {
      ticketId: 0,
      title: "",
      datetime: "",
      location: "",
      payState: "",
      imgUrl:"",
      hallName:""

      
    },
    orderList: [],
    totalPage: 0
  }),
  actions: {
    fetchOrderList(pageNo, category="", word="") {
      api
        .getMyorder(pageNo,category, word)
        .then((res) => {
          console.log(res);
          this.orderList = [...res.data.data.orders];
          this.totalPage = res.data.data.totalPage;
        })
        .catch((err) => {
          console.log(err);
          alert("새 로그인 후 다시 시도해주세요.");
        });
    },
  },
});
