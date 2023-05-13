import { Link } from "react-router-dom";
import { useSelector, connect, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleClickVote } from "../actions/question";
import {useEffect} from "react";
import Login from "./Login";

const withRouter = (Component) => {
    const ComponentWithRouterProp = ({ props }) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        let isLogin = useSelector(_ => _.authenUser.isLogin);
        return isLogin ? <Component {...props} props={{ location, navigate, params }} /> : <Login />;
    };

    return ComponentWithRouterProp;
};
const QuestionDetail = ({ authenUser, selectedQuestion, author, isVoted, votedOption }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(selectedQuestion == null) {
            navigate("*");
        }
      }, [])

    function caculatePercent(voteId) {
        let total = selectedQuestion.optionOne.votes.length + selectedQuestion.optionTwo.votes.length;
        switch (voteId) {
            case 1:
                return ((selectedQuestion.optionOne.votes.length * 100) / total).toFixed(1);
            case 2:
                return ((selectedQuestion.optionTwo.votes.length * 100) / total).toFixed(1);
        }
    };
    const voteOption = (option) => {
        return dispatch(handleClickVote(selectedQuestion.id, authenUser.currentUser[0], option));
    };

    return selectedQuestion == null ?("") : (
        <div>
            <h4>Question Detail</h4>
            <div className="container">
                <div className="row">
                    <div className="dashboard-title col-md-12 text-center text">
                        Poll by {author.id}
                    </div>
                    <div className="col-md-12 text-center">
                        <img className="img-avatarURL" src={author.avatarURL}></img>
                        <p className="text-bold">Would You Rather</p>

                    </div>
                    <div className="col-md-6 text-center">
                        <div className="div-question-detail">
                            {selectedQuestion.optionOne.text}
                            <button className={`btn btn-primary col-md-12 ${isVoted ? votedOption == "optionOne" ? "disabled" : "disabled color-gray" : ""}`} onClick={() => voteOption("optionOne")}>
                                Click
                            </button>
                            {
                                isVoted ? (
                                    <div className="col-md-12">
                                        Number of people who voted for that option: {selectedQuestion.optionOne.votes.length} - {caculatePercent(1)}%
                                    </div>
                                ) : ("")
                            }
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="div-question-detail">
                            {selectedQuestion.optionTwo.text}
                            <button className={`btn btn-primary col-md-12 ${isVoted ? votedOption == "optionTwo" ? "disabled" : "disabled color-gray" : ""}`} onClick={() => voteOption("optionTwo")}>
                                Click
                            </button>
                            {
                                isVoted ? (
                                    <div className="col-md-12">
                                        Number of people who voted for that option: {selectedQuestion.optionTwo.votes.length} - {caculatePercent(2)}%
                                    </div>
                                ) : ("")
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = ({ authenUser, listUser, question }, { props }) => {
    if(authenUser.isLogin){
        const { id } = props.params;
        const selectedQuestion = Object.values(question).find(_ => _.id === id);
        return {
            authenUser: authenUser,
            selectedQuestion: selectedQuestion,
            author: selectedQuestion == null ? null : Object.values(listUser).find(_ => _.id === selectedQuestion.author),
            isVoted: listUser[authenUser.currentUser[0].id].answers[id.toString()] == null ? false : true,
            votedOption: listUser[authenUser.currentUser[0].id].answers[id.toString()]
        };
    }else{
        return {

        };
    }
};

export default withRouter(connect(mapStateToProps)(QuestionDetail));
