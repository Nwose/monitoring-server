import axios from "axios";

export default axios.create({
  baseURL: "http://165.227.142.137:5010/api",
  headers: {
    "Content-type": "application/json"
  }
});

