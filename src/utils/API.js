import axios from "axios";

const API = {
  randomEmployee: function () {
      return axios.get("https://randomuser.me/api/?results=100");
  }
};

export default API;