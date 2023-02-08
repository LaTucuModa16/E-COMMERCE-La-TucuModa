import axios from "axios";
import { REACT_APP_URL } from "../../env";

export function getProducts() {
  return async function (dispatch) {
    let json = await axios.get(`${REACT_APP_URL}/products`, {});
    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    let json = await axios.get(`${REACT_APP_URL}/products?name=${name}`, {});

    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}

export function getCategories() {
  return async function (dispatch) {
    let json = await axios.get(`${REACT_APP_URL}/categories`, {});

    return dispatch({
      type: "GET_CATEGORIES",
      payload: json.data,
    });
  };
}

export function setFilters(payload) {
  return {
    type: "SET_FILTERS",
    payload,
  };
}
