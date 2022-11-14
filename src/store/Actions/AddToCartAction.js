import ACTION_TYPES from "../ReduxConstants/Constants";

// Actions are plain JS functions
const AddToCartAction = (prod) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.ADD_TO_CART,
      payload: prod,
    });
  };
};
export { AddToCartAction };
