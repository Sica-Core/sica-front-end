import React from "react";
import Header from "../../components/Header";
import Request from "../../components/Request";

class Store extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <React.Fragment>
                <Header/>
                <Request method="GET" path="/Shop/products">
                    {({ loading, error, data }) => {
                        return (
                            <React.Fragment>
                                <p>{JSON.stringify({ loading, error, data })}</p>
                            </React.Fragment>
                        )
                    }}
                </Request>
            </React.Fragment>
        )
    }
}

export default Store;