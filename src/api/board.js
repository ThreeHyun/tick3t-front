import axios from "axios";

const API_URL = "https://46920bcd-a7ef-4ebe-8f4a-509a2967d14d.mock.pstmn.io/";
export default {
  getUserList: function (pageNo) {
    return axios.get(API_URL + `admin?page=${pageNo}`);
  },
  getUserDetails: function (userId) {
    // console.log("param userId" + userId);
    return axios.get(API_URL + `admin?page=1/details/${userId}`);
  },
};
