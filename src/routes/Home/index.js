import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Request from "../../components/Request";
import injectUser from "../../HoC/injectUser";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        if (!this.props.current_user) return <React.Fragment>
            <Header/><br/>
            {"Not logged in"}
        </React.Fragment>
        return (
            <Request method="GET" path={`/User/profile?Id=${this.props.current_user.id}`}>
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

export default injectUser(Home);