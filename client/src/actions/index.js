import axios from "axios";

export function getProducts() {
  return async function (dispatch) {
    var { data } = await axios.get("http://localhost:3001/products");
    return dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
}
