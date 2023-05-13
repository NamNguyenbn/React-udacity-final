import { SET_ANSWER_FOR_QUESTION, RECEIVE_USERS, SET_QUESTION_FOR_USER } from "../actions/user";

export default function listUser(state = {}, action) {
    switch (action.type) {
        case SET_ANSWER_FOR_QUESTION:
            return {
                ...state,
                [action.user.id]: {
                    ...state[action.user.id],
                    answers: {
                        ...state[action.user.id].answers,
                        [action.id]:action.answer
                    }
                }
            };
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
            case SET_QUESTION_FOR_USER:
                return {
                    ...state,
                    [action.userId]:{
                        ...state[action.userId],
                        questions:[
                            ...state[action.userId].questions.concat([
                                action.questionId
                            ])
                        ]
                    }
                };
        default:
            return state;
    }
}
