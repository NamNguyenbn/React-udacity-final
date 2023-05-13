export const RECEIVE_USERS = "RECEIVE_USERS";
export const SET_ANSWER_FOR_QUESTION = "SET_ANSWER_FOR_QUESTION";
export const SET_QUESTION_FOR_USER = "SET_QUESTION_FOR_USER";
export function receiveUsers(users) {
    return {
      type: RECEIVE_USERS,
      users,
    };
  }
  
export const setAnswerForQuestion = (id, user, answer) => {
return {
    type: SET_ANSWER_FOR_QUESTION,
    id,
    user,
    answer
};
}
export const setQuestionForUser = (userId, questionId) => {
  return {
      type: SET_QUESTION_FOR_USER,
      userId,
      questionId,
  };
  }