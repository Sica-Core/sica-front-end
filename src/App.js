import React from "react";
import Routes from "./routes";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Routes/>
            </React.Fragment>
        )
    }
}

export default App;