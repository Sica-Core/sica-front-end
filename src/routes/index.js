import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

// import NotLoggedInProtected from "../components/NotLoggedInProtected";
// import LoggedInProtected from "../components/LoggedInProtected";
// import NotLoggedHeader from "./NotLoggedHeader";
// import LoggedHeader from "./LoggedHeader";
const E404 = lazy(() => import('./E404'));
const Home = lazy(() => import('./Home'));


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
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/" component={E404} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Routes;
