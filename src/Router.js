import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom"

import RedirectPath from "./components/RedirectPath";
import LoginPage from "./components/LoginPage/LoginPage";

function Router ({isAuthorized}) {

    return (
        <BrowserRouter> 
            <Switch>
                <Route path='/login'>
                    <LoginPage />
                </Route>
                <Route path='/main'>
                    <h1>Main</h1>
                </Route>
                <RedirectPath isAuthorized={isAuthorized} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router