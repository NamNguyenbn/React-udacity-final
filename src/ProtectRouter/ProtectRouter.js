import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({children}){
  const isLogin = useSelector(_ => _.authenUser.isLogin);
  const location = useLocation();
    return isLogin === true ? (
      children
    ) : (
      <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}
export default RequireAuth;