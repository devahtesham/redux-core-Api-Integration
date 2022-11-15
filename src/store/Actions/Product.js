import axios from "axios";
import ACTION_TYPE from "../ReduxConstants/ActionType";
// action for get products data from API
const GetProduct = () => {
  // aek reducer function k andr multiple dispatch hosakty hen
  return async (dispatch) => {
    try {
      // we want to display loader before calling API
      dispatch({
        // ye dispatch API call hony se pehly chalygaa
        type: ACTION_TYPE.PRODUCT_DATA_LOADING,
      });
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      // console.log("data", data);
      dispatch({
        // ye dispatch API successfully call hony k bd chalygaa
        type: ACTION_TYPE.PRODUCT_DATA_LOADING_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        // ye dispatch API call krty wkt koi error agaya tu us k result men chalygaa
        type: ACTION_TYPE.PRODUCT_DATA_LOADING_ERROR,
      });
      console.log(error);
    }
  };
};
// action for add product to cart
const AddProduct = (prod) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPE.ADD_PRODUCT,
      payload: prod,
    });
  };
};
// action for remove cart product
const RemoveProduct = (prod) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_PRODUCT,
      payload: prod,
    });
  };
};
export { GetProduct, AddProduct, RemoveProduct };
