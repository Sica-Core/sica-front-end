import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <React.Fragment>
            <Link to="/">Feed</Link>
            <Link to="/store">Store</Link>
            <Link to="/register">Register</Link>
        </React.Fragment>
    )
}