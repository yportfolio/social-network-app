import { combineReducers } from "redux";
import DataReducer from "./DataReducer";

export default combineReducers({ books: DataReducer });
