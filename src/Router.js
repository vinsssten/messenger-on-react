import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom"

import RedirectPath from "./components/RedirectPath";
import LoginPage from "./components/LoginPage/LoginPage";
import MainPage from "./components/MainPage/MainPage";

function Router ({isAuthorized}) {

    return (
        <BrowserRouter> 
            <Switch>
                {/* <Route path='/login'>
                    <LoginPage />
                </Route> */}
                <Route path='/mainpage'>
                    <MainPage />
                </Route>
                <RedirectPath isAuthorized={isAuthorized} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router