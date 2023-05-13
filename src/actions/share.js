import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getInitialData } from "../API/app";
import { receiveUsers } from "./user";
import { receiveQuestion } from "./question";

export function handleInitialData() {
    return (dispatch) => {
      dispatch(showLoading());
      return getInitialData().then(({ users,question }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestion(question));
        dispatch(hideLoading());
      });
    };
  }
  