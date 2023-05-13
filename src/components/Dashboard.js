import { Link } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Login from "./Login";
import QuestionItem from "./QuestionItem";
const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    let isLogin = useSelector(_ => _.authenUser.isLogin);
    return isLogin ? <Component {...props} router={{ location, navigate, params }} /> : <Login />;
  };

  return ComponentWithRouterProp;
};
const Dashboard = (props) => {
  return (
    <div>
      <h4>Dashboard</h4>

      <div className="container">
        <div className="row">
            <div className="dashboard-title col-md-12 text-center text">
              New Question
            </div>
          {
            props.newQuestions.map(_ => (
              <QuestionItem key={_.id} question={_} />
            ))
          }
           <div className="dashboard-title col-md-12 text-center text">
              Done
            </div>
            {
            props.doneQuestions.map(_ => (
              <QuestionItem key={_.id} question={_} />
            ))
          }
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ authenUser, question }) => {
  if(authenUser.isLogin){
    return {
      authenUser: authenUser,
      newQuestions: Object.values(question).filter(_ => !_.optionOne.votes.includes(authenUser.currentUser[0].id) && !_.optionTwo.votes.includes(authenUser.currentUser[0].id)).sort((a,b) => b.timestamp - a.timestamp),
      doneQuestions: Object.values(question).filter(_ => _.optionOne.votes.includes(authenUser.currentUser[0].id) || _.optionTwo.votes.includes(authenUser.currentUser[0].id)).sort((a,b) => b.timestamp - a.timestamp),
    };
  }else{
    return {

    }
  }
 
};

export default withRouter(connect(mapStateToProps)(Dashboard));
