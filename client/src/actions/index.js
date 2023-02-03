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
