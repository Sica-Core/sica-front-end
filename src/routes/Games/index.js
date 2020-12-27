import React from "react";
import InfoSideBar from "../../components/InfoSideBar";
import SideBar from "../../components/SideBar";

class Games extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <React.Fragment>
                <SideBar/>
                Test
                <InfoSideBar/>
            </React.Fragment>
        )
    }
}

export default Games;