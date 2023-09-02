import { defineStore } from "pinia";
import api from "@/api/mypage";

export const useOrderStore = defineStore("order", {
  state: () => ({
    order: {
        ticketId:0,
        title:"",
        datetime:"",
        location:"",
        payState:"",
        totalPage:0
          },
    orderList: []
  }),
  actions: {
    fetchOrderList(pageNo) {
      api
        .getMyorder(pageNo)
        .then((res) => {
          console.log(res);
          this.orderList = [...res.data.data.orders];
          this.order.totalPage=res.data.data.totalPage;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
 
});
