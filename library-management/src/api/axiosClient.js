import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/codegym-vn/mock-api-books",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;