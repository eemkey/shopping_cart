import axios from "axios";
const baseUrl = "http://localhost:3001/api/";

const getCart = async () => {
  const request = axios.get(`${baseUrl}cart`);
  return request.then((response) => response.data);
};

const addToCart = async (id) => {
  const request = axios.post(`${baseUrl}add-to-cart`, { productId: id });
  return request.then((response) => response.data);
};

const checkout = async () => {
  const request = axios.post(`${baseUrl}checkout`);
  return request.then((response) => response.data);
};

let cartService = { getCart, addToCart, checkout };
export default cartService;
