import Nav from "./Nav";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import reducer from "../reducer";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "../middleware";

describe("ComponentNav", () => {
it("check nav 1", () => {
    const store = createStore(reducer, middleware);
    var comp = render(
        <Provider store={store}>
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        </Provider>);
    expect(comp.getByTestId('NavHomeId')).toBeInTheDocument();
});
it("check nav 2", () => {
    const store = createStore(reducer, middleware);
    var comp = render(
        <Provider store={store}>
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        </Provider>);
    expect(comp.getByTestId('NavLeaderBoardId')).toBeInTheDocument();
});
it("check nav 3", () => {
    const store = createStore(reducer, middleware);
    var comp = render(
        <Provider store={store}>
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        </Provider>);
    expect(comp.getByTestId('NavQuestionId')).toBeInTheDocument();
});
});
