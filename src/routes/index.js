import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import LoggedHeader from "../components/LoggedHeader";
import NotLoggedHeader from "../components/NotLoggedHeader";
import LoggedInOnly from "../components/LoggedInOnly"
import NotLoggedInOnly from "../components/NotLoggedInOnly"

const E404 = lazy(() => import('./E404'));
const Test = lazy(() => import("./Test"));

let only_logged_in = [
    { path: "/store", Component: lazy(() => import('./Store')) },
    { path: "/videos", Component: lazy(() => import('./Videos')) },
    { path: "/games", Component: lazy(() => import('./Games')) },
    { path: "/shop", Component: lazy(() => import('./Shop')) },
    { path: "/explore", Component: lazy(() => import('./Home2')) },
    { path: "/feed", Component: lazy(() => import('./Feed')) },
    { path: "/logout", Component: lazy(() => import('./Logout')) }
]

let only_not_logged_in = [
    { path: "/register2", Component: lazy(() => import('./Register2')) },
    { path: "/register", Component: lazy(() => import('./Register')) },
    { path: "/login", Component: lazy(() => import('./Login')) }
]

const Routes = props => {
    return (
        <Router>
            {/* <React.Fragment>
                <LoggedInOnly justDontRender={true}>
                    <NotLoggedHeader />
                </LoggedInOnly>

                <NotLoggedInOnly justDontRender={true}>
                    <LoggedHeader />
                </NotLoggedInOnly>
            </React.Fragment> */}

            <Suspense fallback={<div></div>}>
                <Route exact path="/test" component={Test}/>
                {/* <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/store" component={Store} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/" component={E404} />
                </Switch> */}
                <Switch>
                    {
                        only_logged_in.map(({path, Component},i) => (
                                <Route key={i} exact path={path} component={props => {
                                    return (
                                        <LoggedInOnly redirect_to="/register">
                                            <Component {...props}/>
                                        </LoggedInOnly>
                                    )
                                }} />
                        ))
                    }
                    {
                        only_not_logged_in.map(({path, Component},i) => (
                                <Route key={i} exact path={path} component={props => {
                                    return (
                                        <NotLoggedInOnly redirect_to="/explore">
                                            <Component {...props}/>
                                        </NotLoggedInOnly>
                                    )
                                }} />
                        ))
                    }
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Routes;
