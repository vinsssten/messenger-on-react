import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function Router () {
    return (
        <BrowserRouter> 
            <Switch>
                <Route path='/auth'>

                </Route>
                <Route path='/registration'>

                </Route>
            </Switch>
        </BrowserRouter>
        
    )
}

export default Router