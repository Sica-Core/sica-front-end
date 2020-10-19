import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <React.Fragment>
            <Link to="/feed">Feed</Link>
            <Link to="/games">Games</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/store">Store</Link>
        </React.Fragment>
    )
}