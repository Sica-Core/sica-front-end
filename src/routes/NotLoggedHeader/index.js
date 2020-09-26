import React from "react";
import { Redirect } from "react-router-dom";
import { withApollo } from "react-apollo";

import { loader } from 'graphql.macro';
const GET_AUTH = loader("../../gql/queries/get_auth.graphql");

const _NotLoggedInProtected = props => {
    try {
        if (!localStorage.getItem("auth:token")) throw new Error("GoToCatch")
        props.client.readQuery({
            query: GET_AUTH
        })
    } catch (err) {
        if (!props.justDontRender) {
            return <Redirect to={"/login"} />
        } else return null
    }
    return props.children
}

export default withApollo(_NotLoggedInProtected)
