import React from "react";

class Logout extends React.Component {
    componentDidMount(){
        localStorage.removeItem("sica_user")
        window.history.go("")
    }
    render(){
        return "Logging out"
    }
}

export default Logout
