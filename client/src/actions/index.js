import axios from "axios";
export const API_URL = process.env.API_URL || "http://localhost:3001";

export function getProducts() {
  return async function (dispatch) {
    let json = await axios.get(`${API_URL}/products`, {});
    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    let json = await axios.get(`${API_URL}/products?name=${name}`, {});

    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}

export function getCategories() {
  return async function (dispatch) {
    let json = await axios.get(`${API_URL}/categories`, {});

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
      let json = await axios.post(`${API_URL}/login`, payload);
      return dispatch({
        type: "LOGIN",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const loginGoogleUser = (payload) => async (dispatch) => {
  try {
    const userInfo = await axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${payload}` },
      })
      .then((res) => res.data);

    const obj = {
      name: userInfo.given_name,
      last_name: userInfo.family_name || "",
      email: userInfo.email,
      img: userInfo.picture,
    };

    dispatch({
      type: "LOGIN",
      payload: obj,
    });
    const cartLS = JSON.parse(localStorage.getItem(`cart${userInfo.email}`));

    if (cartLS) {
      dispatch({ type: "SET_CART", payload: cartLS });
    }
  } catch (error) {
    console.log(error);
  }
};

export function registerUser(payload) {
  // console.log(payload, 'payload')
  return async function (dispatch) {
    const json = await axios.post(`${API_URL}/register`, payload);
    return dispatch({
      type: "REGISTER_USER",
      payload: json,
    });
  };
}

export function getUsers() {
  return async function (dispatch) {
    const json = await axios.get(`${API_URL}/users`);
    return dispatch({
      type: "GET_USERS",
      payload: json.data,
    });
  };
}

export function deleteUser() {
  localStorage.removeItem("accessToken");
  return {
    type: "DELETE_USER",
    payload: {},
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

export function updateUser(id, payload) {
  return async function (dispatch) {
    const json = await axios.put(`${API_URL}/users/${id}`, payload);
    return dispatch({
      type: "UPDATE_USER",
      payload: json.data,
    });
  };
}

export function getUserByUsername(username) {
  return async function (dispatch) {
    try {
      const json = await axios(`${API_URL}/users?username=` + username);
      return dispatch({
        type: "GET_USERNAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSales() {
  return async function (dispatch) {
    let json = await axios.get(`${API_URL}/sales`, {});
    return dispatch({
      type: "GET_SALES",
      payload: json.data,
    });
  };
}
