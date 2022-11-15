import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CombineReducer from "./Reducers/CombineReducer";

const store = createStore(CombineReducer, {}, applyMiddleware(thunk));
export default store;
