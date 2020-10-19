import React from "react";
import Request from "../../components/Request";

class Store extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <Request method="GET" path="/Shop/products">
                {({ loading, error, data }) => {
                    return (
                        <React.Fragment>
                            <p>{JSON.stringify({ loading, error, data })}</p>
                        </React.Fragment>
                    )
                }}
            </Request>
        )
    }
}

export default Store;