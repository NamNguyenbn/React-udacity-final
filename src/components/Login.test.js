import Login from "./Login";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import reducer from "../reducer";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "../middleware";

describe("ComponentLogin", () => {
    it("match snapshot", () => {
        const store = createStore(reducer, middleware);
        var comp = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>);
        expect(comp).toMatchSnapshot();
    });

    it("check item in login page", () => {
        const store = createStore(reducer, middleware);
        let users = {
            sarahedo: {
                id: 'sarahedo',
                password: 'password123',
                name: 'Sarah Edo',
                avatarURL: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
                answers: {
                    "8xf0y6ziyjabvozdd253nd": 'optionOne',
                    "6ni6ok3ym7mf1p33lnez": 'optionOne',
                    "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                    "loxhs1bqm25b708cmbf3g": 'optionTwo'
                },
                questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
            },
            tylermcginnis: {
                id: 'tylermcginnis',
                password: 'abc321',
                name: 'Tyler McGinnis',
                avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYU8ayHqMuoH0QIu_UdjqFMTInp-DG8D4yxT17h_sonhXlBLJYlm3z-Zjow_bt085rhx4&usqp=CAU",
                answers: {
                    "vthrdm985a262al8qx3do": 'optionOne',
                    "xj352vofupe1dqz9emx13r": 'optionTwo',
                },
                questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
            },
            mtsamis: {
                id: 'mtsamis',
                password: 'xyz123',
                name: 'Mike Tsamis',
                avatarURL: "https://static.vecteezy.com/system/resources/thumbnails/002/002/332/small/ablack-man-avatar-character-isolated-icon-free-vector.jpg",
                answers: {
                    "xj352vofupe1dqz9emx13r": 'optionOne',
                    "vthrdm985a262al8qx3do": 'optionTwo',
                    "6ni6ok3ym7mf1p33lnez": 'optionOne'
                },
                questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
            }
        };
        store.getState().listUser = users;
        var comp = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>);
        expect(comp.getByTestId('tylermcginnis')).toBeInTheDocument();
    });

});
