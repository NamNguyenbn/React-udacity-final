export const LOGIN = "LOGIN_ACTION";
export const LOGOUT = "LOGOUT_ACTION";

export function loginAction(user){
   return {
    type: LOGIN,
    user: user
   };
}

export function logoutAction(){
    return {
        type: LOGOUT
    };
}