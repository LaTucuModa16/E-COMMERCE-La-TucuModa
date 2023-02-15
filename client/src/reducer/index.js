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

  user: {},
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

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "REGISTER_USER":
      return {
        ...state,
      };

    case "ADD_CART":
      const addedProduct = state.cart.find((p) => p.id === action.payload.id);
      if (addedProduct) {
        const addedProduct_ = JSON.parse(JSON.stringify(addedProduct));
        addedProduct_.cantidad++;
        const res = state.cart.filter((p) => p.id !== action.payload.id);
        return {
          ...state,
          cart: [...res, addedProduct_],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, cantidad: 1 }],
        };
      }

    case "REMOVE_CART":
      const removeProduct = state.cart.find((p) => p.id === action.payload.id);
      if (removeProduct) {
        const removeProduct_ = JSON.parse(JSON.stringify(removeProduct));
        if (removeProduct_.cantidad === 1) {
          return {
            ...state,
            cart: state.cart.filter((p) => p.id !== action.payload.id),
          };
        } else {
          const removeProduct_ = JSON.parse(JSON.stringify(removeProduct));
          const res = state.cart.filter((p) => p.id !== action.payload.id);
          removeProduct_.cantidad--;
          return {
            ...state,
            cart: [...res, removeProduct_],
          };
        }
      }

    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
