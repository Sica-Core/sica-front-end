import React from "react";
import Header from "../../components/Header";
import InfoSideBar from "../../components/InfoSideBar";
import Request from "../../components/Request";
import SideBar from "../../components/SideBar";

class Store extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <React.Fragment>
                <SideBar/>
                <div className="main-layout">
                    <Request method="GET" path="/Shop/products">
                        {({ loading, error, data }) => {
                            return (
                                <React.Fragment>
                                    <p>{JSON.stringify({ loading, error, data })}</p>
                                </React.Fragment>
                            )
                        }}
                    </Request>
                </div>
                <InfoSideBar/>
            </React.Fragment>
        )
    }
}

export default Store;