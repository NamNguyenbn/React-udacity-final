
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
const NewQuestion = (props) => {

  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [messageOne, setMessageOne] = useState("");
  const [messageTwo, setMessageTwo] = useState("");

  const onClickSave = () => {
    let isValid = true;
    if (optionOne.trim() === "") {
      setMessageOne("This field is required!");
      isValid = false;
    } 
    if (optionTwo.trim() === "") {
      setMessageTwo("This field is required!");
      isValid = false;
    }
    if(isValid){
      props.dispatch(handleCreateQuestion(props.authenUser.currentUser[0].id, optionOne, optionTwo));
      navigate("/")
    }
  };


  return (
    <div className="container row">
      <h4>NewQuestion</h4>
      <div className="col-md-12 text-center">
        <p>Would You Rather</p>
        <p>Create Your Our Poll</p>
      </div>
      <div className="col-md-12 text-center form-group">
        <p>First Option</p>
        <input data-testid="name-input-one" className="form-control" type="text" placeholder="Option One" value={optionOne} onChange={(e) => setOptionOne(e.target.value)}/>
        <label className="text-danger">{messageOne}</label>
        <p>Second Option</p>
        <input data-testid="name-input-two" className="form-control" type="text" placeholder="Option Two" value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)}/>
        <button data-testid="btn-submit" style={{ marginTop: "25px" }} className="col-md-12 btn btn-primary" onClick={() => onClickSave()}>Save</button>
        <label className="text-danger">{messageTwo}</label>
      </div>
    </div>


  );
};

const mapStateToProps = ({ authenUser }) => {
  if (authenUser.isLogin) {
    return {
        authenUser: authenUser
    };
  } else {
    return {

    };
  }
};

export default connect(mapStateToProps)(NewQuestion);
