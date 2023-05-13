import { useEffect, useState } from "react";
import { login } from "../API/app"
import { useDispatch, connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginAction } from "../actions/authenUser";
const Login = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const onClickLogin = (user) => {
        login(user.id, user.password).then(_ => {
            if (_.message == "Login success!") {
                props.dispatch(loginAction(_.user));
                navigate(location.state == null ? '/' : location.state.path);
            }
        });
    };
    return (
        <div>
            <h4 >Login</h4>
            {
                props.listUser.map(_ =>
                (
                    <div key={_.id}>
                        <label>
                            User Name: {_.id}
                        </label>
                        <img className="img-avatarURL" src={_.avatarURL}></img>
                        <button data-testid={_.id} onClick={() => onClickLogin(_)}>Login</button>
                    </div>
                ))
            }
        </div>
    );
};

const mapStateToProps = ({ listUser }) => {
    return {
        listUser: Object.keys(listUser).map((id) => listUser[id]),
    };
};


export default connect(mapStateToProps)(Login);;
