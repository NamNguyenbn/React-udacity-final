import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ]).then(([users, question]) => ({
      users,
      question
    }))
  }

  export function getUsers () {
    return Promise.all([
      _getUsers(),
    ]).then(
      ([users]) => (users)
    )
  }

  export async function login(id, password){
    var users = await getUsers();
    var user = Object.values(users).filter(_ => _.id === id && _.password === password);
    if (user.length > 0) {
      return {
        message: "Login success!",
        user: user
      };
    } else {
      return {
        message: "Login fail!",
        user: null
      };
    }
  }
  export function saveQuestionAnswer(id, user, answer){
    return Promise.all([
      _saveQuestionAnswer({authedUser: user.id , qid: id,answer: answer}),
    ]).then(
      (result) => (result)
    )
  }
  export function saveQuestion(userId, optionOneText, optionTwoText){
    return Promise.all([
      _saveQuestion({author: userId , optionOneText: optionOneText, optionTwoText: optionTwoText}),
    ]).then(
      (result) => (result)
    )
  }