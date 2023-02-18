import axios from "axios";

export function getProducts() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/products", {});
    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    let json = await axios.get(
      `http://localhost:3001/products?name=${name}`,
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
    let json = await axios.get(`http://localhost:3001/categories`, {});

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
  // console.log(payload, 'payload')
  return async function (dispatch) {
    try {
      let json = await axios.post("http://localhost:3001/login", payload);
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
  // console.log(payload, 'payload')
  return async function (dispatch) {
    const json = await axios.post("http://localhost:3001/register", payload);
    return dispatch({
      type: "REGISTER_USER",
      payload: json,
    });
  };
}

export function getUsers() {
  return async function (dispatch) {
    const json = await axios.get('http://localhost:3001/users');
    return dispatch({
      type: 'GET_USERS',
      payload: json.data
    });
  };
};

export function deleteUser() {
    return {
      type: 'DELETE_USER',
      payload: {}
    };
};

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

