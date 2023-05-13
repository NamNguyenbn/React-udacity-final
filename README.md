# Employee Polls

You have been asked by the HR department of your company to build an application that employees can use internally. In order to improve collaboration and transparency within the company, every employee can access the application and create a poll with two proposed solutions. Employees can then vote on these solutions and see which solutions have the most votes. In addition, HR has requested you have a dashboard that lists every employee ordered by the number of polls they've created and answered. To give employees incentive to use your application, HR will give a prize each quarter for the top employees who have created and answered the most polls.

In the "Employee Polls" Project, you'll build a web app that lets an employee create polls for coworkers. The process goes like this: An employee is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is not possible.

In your app, users will be able to answer polls, see which polls they haven’t answered, see how other people have voted, post polls, and see the ranking of users on the leaderboard.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`_DATA_.js`](src/API/_DATA_.js) contains the methods you will need to perform necessary operations on the backend:

- [`_getUsers`](#_getUsers)
- [`_getQuestions`](#_getQuestions)
- [`_saveQuestion`](#_saveQuestion)
- [`_saveQuestionAnswer`](#_saveQuestionAnswer)

### `_getUsers`

Method Signature:

```js
_getUsers();
```

- Returns a Promise which resolves to a JSON object containing a collection of users objects.
- This collection represents the users imformation in your app.

### `_getQuestions`

Method Signature:

```js
_getQuestions();
```

- Returns a Promise which resolves to a JSON object containing a collection of question objects

### `_saveQuestion`

Method Signature:

```js
_saveQuestion(question);
```

- question: `<Object>`
- Returns a Promise which resolves to a JSON object containing a question saved.
- Save a question object to list question.

### `_saveQuestionAnswer`

Method Signature:

```js
_saveQuestionAnswer({ authedUser, qid, answer });
```

- authedUser: id of current user.
- qid: id of question user want answer.
- answer : answer of user for a question.
- Returns a Promise which resolves to a boolean object containing a status of request.
- Save answer for a question with user id of current user.
