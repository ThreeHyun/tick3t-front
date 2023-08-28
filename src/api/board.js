import axios from "axios";

const API_URL = "https://7f6e3e61-64b1-41dd-bb49-bf59df779508.mock.pstmn.io/";

export default {
  getUserList: function (pageNo) {
    return axios.get(API_URL + `admin?page=${pageNo}`);
  },
  getUserDetails: function (userId) {
    console.log("param userId" + userId);
    return axios.get(API_URL + `admin/user/${userId}`);
  },
};
