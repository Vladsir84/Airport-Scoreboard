import React from "react";
import Scoreboard from "./components/scoreboard/Scoreboard";
import store from "./store";
import { Provider } from "react-redux";

const App = () => (
        <Provider store={store}>
                <Scoreboard />
        </Provider>
)

export default App;