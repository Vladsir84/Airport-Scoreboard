/* eslint-disable no-unused-vars */
import React from "react";
import { Provider } from "react-redux";
import Page from "./components/scoreboard/Page.jsx";
import store from "./store";

const App = () => (
        <Provider store={store}>
                <Page />
        </Provider>
)

export default App;