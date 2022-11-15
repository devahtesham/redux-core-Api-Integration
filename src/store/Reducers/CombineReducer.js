import { combineReducers } from "redux";
import { AddProductReducers, GetProductReducers } from "./ProductReducers";

const CombineReducer = combineReducers({
  GetProductReducers: GetProductReducers,
  AddProductReducers: AddProductReducers,
});
export default CombineReducer;
