const initialState = {
  products: [],
  backupProducts: [],
  categories: [],
  filterProducts: {
    categorie: "all",
    brand: "all",
    size: "all",
  },
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        backupProducts: action.payload,
        filterProducts: {
          categorie: "all",
          brand: "all",
          size: "all",
        },
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "SET_FILTERS":
      let filters = {
        ...state.filterProducts,
        [action.payload.atributte]: action.payload.value,
      };

      if (action.payload.atributte === "categorie") {
        filters = {
          ...filters,
          brand: "all",
          size: "all",
        };
      }

      let filteredProducts = [...state.backupProducts];
      if (filters.categorie !== "all") {
        filteredProducts = filteredProducts.filter((prod) =>
          prod.categorie[0].name.includes(filters.categorie)
        );
      }
      if (filters.brand !== "all") {
        filteredProducts = filteredProducts.filter(
          (prod) => prod.brand === filters.brand
        );
      }
      if (filters.size !== "all") {
        filteredProducts = filteredProducts.filter((prod) =>
          prod.size.includes(filters.size)
        );
      }
      return {
        ...state,
        filterProducts: filters,
        products: filteredProducts,
      };

    case "REGISTER_USER":
      return {
        ...state,
      };

    case "ADD_CART":
      const addedProduct = state.cart.find((p) => p.id === action.payload.id);
      if (addedProduct) {
        addedProduct.cantidad++;
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, cantidad: 1 }],
        };
      }

    default:
      return state;
  }
}

export default rootReducer;
