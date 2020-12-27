import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Routes from "./routes";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose: 5000,
    draggable: true,
    //etc you get the idea
  });
  
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