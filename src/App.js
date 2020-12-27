import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Routes from "./routes";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ApolloProvider client={client}>
                <Routes/>
            </ApolloProvider>
        )
    }
}

export default App;