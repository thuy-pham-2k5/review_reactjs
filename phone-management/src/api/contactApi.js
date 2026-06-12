import axiosClient from "./axiosClient";

const contactApi = {
  getAll() {
    return axiosClient.get("/contacts");
  },

  getById(id) {
    return axiosClient.get(`/contacts/${id}`);
  },

  create(contact) {
    return axiosClient.post("/contacts", contact);
  },

  update(id, contact) {
    return axiosClient.put(`/contacts/${id}`, contact);
  },

  delete(id) {
    return axiosClient.delete(`/contacts/${id}`);
  },
};

export default contactApi;