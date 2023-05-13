import NewQuestion from "./NewQuestion";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import reducer from "../reducer";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "../middleware";

describe("ComponentNewQuestion", () => {
    it("will have all expected fields", () => {
        const store = createStore(reducer, middleware);
        var authenUser = {
            currentUser: [{
                id: '8xf0y6ziyjabvozdd253nd',
                author: 'sarahedo',
                timestamp: 1467166872634,
                optionOne: {
                  votes: ['sarahedo'],
                  text: 'Build our new application with Javascript',
                },
                optionTwo: {
                  votes: [],
                  text: 'Build our new application with Typescript'
                }
              }],
            isLogin: true
        };
        store.getState().authenUser = authenUser;
        var comp = render(
        <Provider store={store}>
            <BrowserRouter>
                <NewQuestion/>
            </BrowserRouter>
        </Provider>);
        var inputOptionOne = comp.getByTestId("name-input-one");
        fireEvent.change(inputOptionOne,{target:{value:'Mike'}});
        var inputOptionTwo = comp.getByTestId("name-input-two");
        fireEvent.change(inputOptionTwo,{target:{value:' '}});
        fireEvent.click(comp.getByTestId('btn-submit'));
        expect(comp.getByText('This field is required!')).toBeInTheDocument();
    });
});