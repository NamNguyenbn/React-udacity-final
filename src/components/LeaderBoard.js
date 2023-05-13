import { useSelector, connect, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleCreateQuestion } from "../actions/question";
import { useState } from "react";
import Login from "./Login";

// const withRouter = (Component) => {
//   const ComponentWithRouterProp = ({ props }) => {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     let isLogin = useSelector(_ => _.authenUser.isLogin);
//     return isLogin ? <Component {...props} props={{ location, navigate, params }} /> : <Login />;
//   };

//   return ComponentWithRouterProp;
// };

const LeaderBoard = (props) => {
  return (
    <div className="container row">
      <h4>LeaderBoard</h4>

      <table className="table">
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
        {
            props.listUser.map(_ =>
            (
              <tr key={_.id}>
                <td>
                  <img src={_.avatarURL} className="img-nav" />
                  {_.id}
                  </td>
                <td>{Object.keys(_.answers).length}</td>
                <td>{_.questions.length}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ authenUser, listUser }) => {
  if (authenUser.isLogin) {
    return {
      authenUser: authenUser,
      listUser: Object.values(listUser).sort((a,b) => 
        (Object.keys(b.answers).length + b.questions.length) -  (Object.keys(a.answers).length + a.questions.length)
      )
    };
  } else {
    return {

    };
  }
};

export default connect(mapStateToProps)(LeaderBoard);