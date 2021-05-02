import axios from "axios";

const API = {
  randomEmployee: function () {
      return axios.get("https://randomuser.me/api/?results=30");
  }
};

export default API;