import axios from "axios";

const baseUrl = "http://localhost:3001/api/";

const getProducts = async () => {
  const request = axios.get(`${baseUrl}products`);
  return request.then((response) => response.data);
};

const getProduct = async (id) => {
  const request = await axios.get(`${baseUrl}products/${id}`);
  return request.data;
};

const addProduct = async (newProduct) => {
  const request = axios.post(`${baseUrl}products`, { ...newProduct });
  return request.then((response) => response.data);
};

const editProduct = async (id, updatedObject) => {
  const request = axios.put(`${baseUrl}products/${id}`, { ...updatedObject });
  return request.then((response) => response.data);
};

const deleteProduct = async (id) => {
  const request = axios.delete(`${baseUrl}products/${id}`);
  return request.then((response) => response.data);
};

const productService = {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
};
export default productService;
