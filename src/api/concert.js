import { api } from "./instance";

export default {
  orderCheck: function (concertId) {
    return api.get(`order/check/${concertId}`);
  },
  seatCheck: function (ticketId, concertId, gradeId, totalSeat, price) {
    return api.post(`order`, {
      ticketId: ticketId,
      concertId: concertId,
      gradeId: gradeId,
      totalSeat: totalSeat,
      price: price,
    });
  },
};
