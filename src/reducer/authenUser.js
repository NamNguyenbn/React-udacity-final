import { LOGIN, LOGOUT } from "../actions/authenUser";

const initULogin = {
    currentUser: null,
    isLogin: false
};
export default function authenUser(state = initULogin, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                currentUser: action.user,
                isLogin: true
            };
        case LOGOUT:
            return {
                ...state,
                currentUser: null,
                isLogin: false
            };
            default:
                return state;
    }
}
