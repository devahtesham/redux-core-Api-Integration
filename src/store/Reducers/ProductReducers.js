// aek file k andr ham multiple reducers bnaasakty hen jo similar scenario se related hoon
import ACTION_TYPE from "../ReduxConstants/ActionType";

const INITIAL_STATE = {
  dataLoading: false,
  data: [], // state for storing API data
  cartProducts: [], // state for storing cart products
};
// this is a reducer for display data which was got by Action
const GetProductReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.PRODUCT_DATA_LOADING:
      return {
        ...state,
        dataLoading: true,
      };
    case ACTION_TYPE.PRODUCT_DATA_LOADING_SUCCESS:
      return {
        data: [...action.payload],
      };
    case ACTION_TYPE.PRODUCT_DATA_LOADING_ERROR:
      return {
        ...state,
        dataLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

const AddProductReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_PRODUCT:
      return {
        cartProducts: [...state.cartProducts, action.payload],
      };
    case ACTION_TYPE.REMOVE_PRODUCT:
      const allProducts = state.cartProducts;
      const filteredProducts = allProducts.filter(
        (prod) => prod.id !== action.payload.id
      );
      // console.log("filteredProducts", filteredProducts);
      return {
        cartProducts: [...filteredProducts],
      };
    default:
      return {
        ...state,
      };
  }
};
export { GetProductReducers, AddProductReducers };
