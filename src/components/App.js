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
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/new" element={<NewQuestion />} />
            <Route path="/questions/:id" element={<QuestionDetail />} />
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
