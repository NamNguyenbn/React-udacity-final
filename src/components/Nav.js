import { Link } from "react-router-dom";
import { useSelector, connect, useDispatch } from "react-redux";
import {logoutAction} from "../actions/authenUser"
const Nav = (props) => {

  const onClickLogout = () => {
    props.dispatch(logoutAction());
  }

  return (
    <div className="container row">
      <nav className="nav col-md-9 col-sm-9 col-xs-9">
        <ul className="list-group list-group-horizontal-md">
          <li className="list-group-item">
            <Link data-testid="NavHomeId" to="/">Home</Link>
          </li>
          <li className="list-group-item">
            <Link data-testid="NavLeaderBoardId" to="/leaderboard">Leader Board</Link>
          </li>
          <li className="list-group-item">
            <Link data-testid="NavQuestionId" to="/new">New Question</Link>
          </li>
        </ul>
      </nav>
      {
        props.authenUser.isLogin ? (
          <div className="col-md-3 col-sm-3 col-xs-3">
            <img className="img-nav" src={props.authenUser.currentUser[0].avatarURL} />
            <span style={{marginRight: "25px"}}>{props.authenUser.currentUser[0].id}</span>
            <button className="btn btn-danger" onClick={() => onClickLogout()}>Logout</button>
          </div>
        ) : ("")
      }

    </div>
  );
};

const mapStateToProps = ({ authenUser }) => {
  return {
    authenUser: authenUser
  };
};

export default connect(mapStateToProps)(Nav);