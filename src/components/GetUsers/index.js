import React from "react";
import { withApollo, Query } from "react-apollo";

import { loader } from 'graphql.macro';

import GET_USERS from "../../gql/queries/get_users.graphql"

class GetUsers extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Query query={GET_USERS}>
                    {({loading,error,data,refetch}) => {
                        console.log({loading,error,data})
                        return (
                            <React.Fragment>
                                Loading: {JSON.stringify(loading)}<br/>
                                error: {JSON.stringify(error)}<br/>
                                data: {JSON.stringify(data)}<br/>
                                <br/>
                            </React.Fragment>
                        )
                    }}
                </Query>
            </React.Fragment>
        )
    }
}

export default withApollo(GetUsers);