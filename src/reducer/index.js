import { combineReducers } from "redux";
import authenUser from "./authenUser";
import listUser from "./listUser";
import question from "./question";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
    authenUser,
    listUser,
    question,
  loadingBar: loadingBarReducer,
});
