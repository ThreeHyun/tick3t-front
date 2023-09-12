import { api } from "./instance";

// const API_URL = import.meta.env.VITE_API_URL;

// // axios 인스턴스 생성
// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + sessionStorage.getItem("token"),
//   },
// });

export default {
  getConcert: function () {
    return api.get(`concert`);
  },
  detailConcert: function (concertId) {
    return api.get(`concert/${concertId}`);
  },
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
