import axios from "axios";

export function getProducts() {
  return async function (dispatch) {
    let json = await axios.get(
      "https://latucumoda-backend.onrender.com/products",
      {}
    );
    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    let json = await axios.get(
      `https://latucumoda-backend.onrender.com/products?name=${name}`,
      {}
    );

    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}

export function getCategories() {
  return async function (dispatch) {
    let json = await axios.get(
      `https://latucumoda-backend.onrender.com/categories`,
      {}
    );

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
export function LoginUser(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://latucumoda-backend.onrender.com/login",
        payload
      );
      return dispatch({
        type: "LOGIN",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function registerUser(payload) {
  return async function (dispatch) {
    const json = await axios.post(
      "https://latucumoda-backend.onrender.com/register",
      payload
    );
    return dispatch({
      type: "REGISTER_USER",
      payload: json,
    });
  };
}

export function addToCart(payload) {
  return {
    type: "ADD_CART",
    payload,
  };
}

export function removeCart(payload) {
  return {
    type: "REMOVE_CART",
    payload,
  };
}

export function setCart(payload) {
  return {
    type: "SET_CART",
    payload,
  };
}

export function getUsers() {
  return async function (dispatch) {
    const json = await axios("https://latucumoda-backend.onrender.com/users");
    return dispatch({
      type: "GET_USERS",
      payload: json.data,
    });
  };
}
