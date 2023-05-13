import { Link } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Login from "./Login";
import '../App.css';
const QuestionItem = ({ question }) => {

const navigate = useNavigate();

  const convertTimestampToDate = (timestamp) => {
    let date = new Date(timestamp);
    return date.getHours() +":"+ date.getSeconds() +" | "+  date.getMonth() +"/"+  date.getDate() +"/"+  date.getFullYear();
  };

  const onClickShowDetail = (question) => {
    navigate(`/questions/${question.id}`);
  }
  return (
    <div  className="col-md-3 div-item">
      <div className="text-bold">{question.author}</div>

      <div>
      {convertTimestampToDate(question.timestamp)}
      </div>
      <button className="btn btn-primary" onClick={() => onClickShowDetail(question)}>Show</button>
    </div>
  );
};
export default QuestionItem;
