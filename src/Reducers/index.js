import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import chanelReducers from "./chanel";

export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducers
})