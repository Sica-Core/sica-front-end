import React from "react";
import { Redirect } from "react-router-dom";

function LoggedInOnly(props){
    let { loading, loggedIn } = {
        loading: false, loggedIn: Boolean(localStorage.getItem("sica_user"))
    };
    if (loading) return null
    if (!loggedIn) {
        if (props.redirect_to) return <Redirect to={props.redirect_to}/>
    }
    else {
        return props.children
    }
    return null;
}


export default LoggedInOnly
