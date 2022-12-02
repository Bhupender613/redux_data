import { combineReducers } from "redux";
import { productreducer } from "./ProductReducer";
const reducers = combineReducers({ allproduct: productreducer });
export default reducers;
