
import React from "react";
import { Redirect } from "react-router-dom";
import { withApollo } from "react-apollo";

import { loader } from 'graphql.macro';
const GET_AUTH = loader("../../gql/queries/get_auth.graphql");

const _LoggedInProtected = props => {
    try {
        props.client.readQuery({
            query: GET_AUTH
        })
        if (!props.justDontRender) {
            return <Redirect to={"/dashboard"} />
        } else return null
    } catch (err) {
    }
    return props.children
}

export default withApollo(_LoggedInProtected)
