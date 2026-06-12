import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/codegym-vn/mock-api-contacts",
});

export default axiosClient;