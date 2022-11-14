import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Combine from "./Reducers/CombineReducer";

const store = createStore(Combine, {}, applyMiddleware(thunk));
export default store;
