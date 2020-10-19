import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Request from "../../components/Request";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <Request method="GET" path="/SicaUser/profile?id=5">
                {({ loading, error, data }) => {
                    return (
                        <React.Fragment>
                            <Header/>
                            <p>{JSON.stringify({ loading, error, data })}</p>
                        </React.Fragment>
                    )
                }}
            </Request>

        )
    }
}

export default Home;