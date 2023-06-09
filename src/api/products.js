import { apiRequest } from "./utils";

function getProductsList() {
  return apiRequest("GET", "/products");
}

function getProduct(id) {
  return apiRequest("GET", "products/" + id);
}

function getSearch(searchParams) {
  return apiRequest("GET", `/products?title=${searchParams}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: getProductsList,
  getProduct: getProduct,
  getSearch: getSearch
};
