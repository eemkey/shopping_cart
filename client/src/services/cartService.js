import axios from "axios";
const baseUrl = "http://localhost:3001/api/";

const cartService = {
  getCart: async (callback) => {
    return axios.get(`${baseUrl}cart`)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err))
  },
  
  addToCart: async(id, callback) => {
    return axios.post(`${baseUrl}add-to-cart`, {productId: id}).then((response) => response.data).then(callback).catch((err) => console.log(err));
  },
  
  checkout: async (callback) => {
    return axios.post(`${baseUrl}checkout`).then(response => response.data).then(callback).catch((err) => console.log(err))
  }
}

export default cartService;