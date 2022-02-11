import axios from "axios";

const baseUrl = "http://localhost:3001/api/";

const productService = {
  getProducts: (callback) => {
    return axios.get(`${baseUrl}products`)
      .then((response) => response.data)
      .then(callback).catch((err) => console.log(err))
  },
  addProduct: (newProduct, callback) => {
    return axios.post(`${baseUrl}products`, { ...newProduct }).then((response) => response.data).then(callback).catch((err) => console.log(err))
  },
  editProduct: (id, updatedObject, callback) => {
    return axios.put(`${baseUrl}products/${id}`, { ...updatedObject }).then((response) => response.data).then(callback).catch((err) => console.log(err));
  },
  deleteProduct: async(id, callback) => {
    return axios.delete(`${baseUrl}products/${id}`).then((response) => response.data).then(callback).catch((err) => console.log(err))
  },
}  

export default productService
