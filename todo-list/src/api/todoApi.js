import axiosClient from "./axiosClient";

const todoApi = {
  getAll() {
    return axiosClient.get("/todos");
  },

  create(todo) {
    return axiosClient.post("/todos", todo);
  },
};

export default todoApi;