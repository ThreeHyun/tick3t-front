import axios from "axios";

const API_URL = "http://192.168.0.69:4000/";


// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5aHl1bkBlbWFpbC5lbWFpbCIsInVzZXJJZCI6MjQsInN0YXR1c0NkIjp0cnVlLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjkzODMwMTQ3fQ.YSnD9glOEQLLqqaypaEn1wNyVZSDLq_BFxHV9AVJBbqmUV7Eo-XEhT6mJiGdBaCila_DKb1sG-5WXtg4j559Lw"
  },
});

export default {
  getProfile: function(){
    return api.get(API_URL + `profile`);
  },
  Password: function (oldPassword,newPassword,newPasswordCheck) {
    return api.post(API_URL + `profile/password`,{oldPassword:oldPassword, newPassword:newPassword, newPasswordCheck:newPasswordCheck});
  },
  AuthFan:function(fanId){
    return api.post(API_URL+`profile/fanId`,{fanId:fanId});
  },
  withdraw:function(password){
    return api.post(API_URL+`profile/withdraw`,{password:password});
  },
  getMyorder: function(pageNo){
    return api.get(API_URL+`myorder?page=${pageNo}`);
  }

  
};
