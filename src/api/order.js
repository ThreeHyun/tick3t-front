import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + sessionStorage.getItem("token"),
  },
});

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
