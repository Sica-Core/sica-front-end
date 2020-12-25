import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import NotLoggedInOnly from "../components/NotLoggedInOnly";
import LoggedInOnly from "../components/LoggedInOnly";

const E404 = lazy(() => import('./E404'));
const Home = lazy(() => import('./Home'));

let only_logged_in = [
    { path: "/store", Component: lazy(() => import('./Store')) },
    // { path: "/installers", Component: lazy(() => import('./Installers')) },
    // { path: "/floors", Component: lazy(() => import('./Floors')) },
    { path: "/logout", Component: lazy(() => import('./Logout')) }
]

let only_not_logged_in = [
    { path: "/register", Component: lazy(() => import('./Register')) }
]

const Routes = props => {
    return (
        <Router>
            {/* <React.Fragment>
                <LoggedInProtected justDontRender={true}>
                    <NotLoggedHeader />
                </LoggedInProtected>

                <NotLoggedInProtected justDontRender={true}>
                    <LoggedHeader />
                </NotLoggedInProtected>
            </React.Fragment> */}

            <Suspense fallback={<div></div>}>
                {/* <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/store" component={Store} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/" component={E404} />
                </Switch> */}
                <Switch>
                    <Route exact path="/" component={Home} />
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
                                        <NotLoggedInOnly redirect_to="/">
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
