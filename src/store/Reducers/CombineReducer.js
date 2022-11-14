import { combineReducers } from "redux";
import AddCartReducer from "./AddCartReducer";

const Combine = combineReducers({
  addToCartReducer: AddCartReducer,
});
export default Combine;
