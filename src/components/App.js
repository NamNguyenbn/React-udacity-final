import '../App.css';
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/share";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import QuestionDetail from "./QuestionDetail";
import Login from "./Login";
import RequireAuth from "../ProtectRouter/ProtectRouter";
import PageNotFound from "./PageNotFound";
const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  },[]);

 

  return(
    <Fragment>
      <LoadingBar />
      <div className='container'>
        <Nav />
      {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<RequireAuth><Dashboard /></RequireAuth>} />
            <Route path="/leaderboard" element={<RequireAuth><LeaderBoard /></RequireAuth>} />
            <Route path="/new" element={<RequireAuth><NewQuestion /></RequireAuth>} />
            <Route path="/questions/:id" element={<RequireAuth><QuestionDetail /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<RequireAuth><PageNotFound /></RequireAuth>} />
          </Routes>
        )}
      </div>
    </Fragment>
  )
}

// const mapStateToProps = ({ authenUser }) => ({
//   loading: authenUser === null,
// });

export default connect()(App);
