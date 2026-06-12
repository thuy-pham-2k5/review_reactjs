import axiosClient from "./axiosClient";

const bookApi = {
  getAll() {
    return axiosClient.get("/books");
  },

  getById(id) {
    return axiosClient.get(`/books/${id}`);
  },

  create(book) {
    return axiosClient.post("/books", book);
  },

  update(id, book) {
    return axiosClient.put(`/books/${id}`, book);
  },

  delete(id) {
    return axiosClient.delete(`/books/${id}`);
  },
};

export default bookApi;