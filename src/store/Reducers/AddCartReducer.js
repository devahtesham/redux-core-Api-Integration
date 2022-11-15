import ACTION_TYPES from "../ReduxConstants/Constants";

const INITIAL_STATE = {};

const AddCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return {};

    default:
      return {};
  }
};
export default AddCartReducer;
