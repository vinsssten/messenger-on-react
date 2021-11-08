import React from "react";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./store/store";

function App () {
    const isAuthorized = true

    return (
        <Provider store={store}>
            <Router isAuthorized={isAuthorized} />
        </Provider>
    )
}

export default App