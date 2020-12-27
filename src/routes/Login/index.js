import React from "react";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="login">
                <div className="login-left">
                <div className="logo">
                    <img src="./toolkit/images/sica-logo.svg" alt="" />
                </div>
                <h2>
                    Play tournaments, <br />
                    Have fun, <br />
                    Win prices!
                </h2>
                </div>
                <div className="login-right">
                <h4>Welcome Back</h4>
                <div className="inputs-group">
                    <label className="mylabel" htmlFor>
                    <div className="mylabel__img">
                        <img src="./toolkit/images/user.svg" alt="" />
                    </div>
                    <input className="input" type="text" placeholder="Username" />
                    </label>
                    <label className="mylabel" htmlFor>
                    <div className="mylabel__img">
                        <img src="./toolkit/images/padlock.svg" alt="" />
                    </div>
                    <input className="input" type="password" placeholder="Password" />
                    </label>
                    <button onClick={e => {
                        localStorage.setItem("sica_user", JSON.stringify(
                            {"id":1,"uid":null,"firstName":"sdasdsdd","lastName":"dasasd","userName":"dsasdsdasdsd","email":"dasdsa@asdd.ocm","sicaTokens":0,"isAdmin":true,"isSicaBanned":false,"avatarUrl":null,"isSubscribed":true}
                        ))
                        window.history.go("")
                    }} className="button mybutton mt-70">Sign Up</button>
                    <p className="text-center"><a href="#">Forgot Password</a></p>
                </div>
                </div>
            </div>

        )
    }
}

export default Register;