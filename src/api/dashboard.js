import { api } from "./instance";

export default {
  getFanTable: function (fanCd) {
    return api.get(`admin/fan/${fanCd}`);
  },
  getTicketList: function () {
    return api.get(`admin/ticket`);
  },
  getTicketTable: function (concertId) {
    return api.get(`admin/ticket/${concertId}`);
  },
};
