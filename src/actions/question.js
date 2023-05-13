import {setAnswerForQuestion, setQuestionForUser} from "./user";
import { saveQuestionAnswer, saveQuestion } from "../API/app";

export const CREATE_QUESTION = "CREATE_QUESTION";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const SET_VOTE_FOR_QUESITON = "SET_VOTE_FOR_QUESITON";

export function createQuestion(newQuestion){
    return {
        type: CREATE_QUESTION,
        newQuestion
    };
}
export function receiveQuestion(questions){
    return {
        type:RECEIVE_QUESTION,
        questions
    };
}

export function setVoteForQuestion (id, user, answer){
    return {
        type:SET_VOTE_FOR_QUESITON,
        id,
        user,
        answer
    };
}
export function handleClickVote(id, user, answer){

    return (dispatch) => {
        saveQuestionAnswer(id, user, answer).then(() => {
            dispatch(setVoteForQuestion(id, user, answer));
            dispatch(setAnswerForQuestion(id, user, answer));
        });
       
    }

}
export function handleCreateQuestion(userId, optionOneText, optionTwoText){
    return (dispatch) => {
        saveQuestion(userId, optionOneText, optionTwoText).then(newQuestion => {
            dispatch(createQuestion(newQuestion));
            dispatch(setQuestionForUser(userId, newQuestion[0].id));
        });
       
    }
}