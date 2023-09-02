import axios from "axios";

const API_URL = "http://localhost:4000/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWFpbEBlbWFpbDEuZW1haWwiLCJ1c2VySWQiOjE5LCJzdGF0dXNDZCI6dHJ1ZSwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY5MzY4NjkzMH0.jGVMm-zBXK-MllUW8ykCqghgjcPVeQyk3LtglNxxtLVLvLHwSuj-1tbqwYBiT9Af5FLH4DSuldWHas963m2JSw"
  },
});

export default {
    detailOrder : function (ticketId) {
        return api.get(`myorder/${ticketId}`); 
    },
    cancel: function (ticketId) {
        return api.post(`myorder/cancel`, {
            ticketId: ticketId
    });
    },
    payment: function (ticketId) {
        return api.post(`myorder/pay`, { 
            ticketId: ticketId 
    });
  },
};