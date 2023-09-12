import { api } from "./instance";

export default {
  detailOrder: function (ticketId) { 
    return api.get(`myorder/${ticketId}`);
  },
  cancel: function (ticketId) {
    return api.post(`myorder/cancel`, {
      ticketId: ticketId,
    });
  },
  payment: function (ticketId) {
    return api.post(`myorder/pay`, {
      ticketId: ticketId,
    });
  },
};
