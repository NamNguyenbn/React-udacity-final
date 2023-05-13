import { CREATE_QUESTION,RECEIVE_QUESTION, SET_VOTE_FOR_QUESITON } from "../actions/question";

export default function question(state = {}, action) {
    switch (action.type) {
        case CREATE_QUESTION:
            return {
                ...state,
                [action.newQuestion[0].id]:action.newQuestion[0]
            };
        case RECEIVE_QUESTION:
            return {
                ...state,
                ...action.questions
            };
            case SET_VOTE_FOR_QUESITON:
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        [action.answer]:{
                            ...state[action.id][action.answer],
                            votes: state[action.id][action.answer].votes.concat([
                                action.user.id
                            ])
                        }
                    }
                };
            default:
                return state;
    }
}
