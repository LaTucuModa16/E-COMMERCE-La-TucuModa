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
  return async function (dispatch) {
    const json = await axios.post("http://localhost:3001/register", payload);
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
    const json = await axios("http://localhost:3001/users");
    return dispatch({
      type: "GET_USERS",
      payload: json.data
    })
  }
}


export function updateUser(id, payload) {
  return async function (dispatch) {
    const json = await axios.put(`http://localhost:3001/users/${id}`, payload);
    return dispatch({
      type: "UPDATE_USER",
      payload: json.data
    })
  }
}

export function getUserByUsername(username) {
  return async function (dispatch) {
    try {
      const json = await axios("http://localhost:3001/users?username=" + username);
      return dispatch({
        type: "GET_USERNAME",
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}


