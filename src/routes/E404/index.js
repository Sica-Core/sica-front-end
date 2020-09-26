import React from "react";
import { Link } from "react-router-dom";

export default props => {
    return (
        <React.Fragment>
            Error 404<br/>
            Go to <Link to="/">Home</Link>
        </React.Fragment>
    )
}