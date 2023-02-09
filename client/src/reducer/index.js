const initialState = {
  products: [],
  backupProducts: [],
  categories: [],
  filterProducts: {
    categorie: "all",
    brand: "all",
    size: "all",
  },
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
        user: action.payload
      }

      case 'REGISTER_USER':
      return {
        ...state
      };

    default:
      return state;
  }
}

export default rootReducer;
