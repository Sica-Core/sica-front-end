import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

let routes = [
    { path: "/home", Component: lazy(() => import('./home')) },
]

const Routes = props => {
    return (
        <Router>
            <Suspense fallback={<div></div>}>
                <Switch>
                    {
                        routes.map(({path, Component},i) => (
                            <Route key={i} exact path={path} component={Component} />
                        ))
                    }
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Routes;