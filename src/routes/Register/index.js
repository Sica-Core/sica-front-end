import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
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
              <h4>Join our community</h4>
              <div className="inputs-group">
                <label className="mylabel" htmlFor>
                  <div className="mylabel__img">
                    <img src="./toolkit/images/user.svg" alt="" />
                  </div>
                  <input className="input" type="text" placeholder="Username" />
                </label>
                <label className="mylabel" htmlFor>
                  <div className="mylabel__img">
                    <img src="./toolkit/images/at.svg" alt="" />
                  </div>
                  <input className="input" type="text" placeholder="Full name" />
                </label>
                <label className="mylabel" htmlFor>
                  <div className="mylabel__img">
                    <img src="./toolkit/images/padlock.svg" alt="" />
                  </div>
                  <input className="input" type="password" placeholder="Password" />
                </label>
                <label className="mylabel" htmlFor>
                  <div className="mylabel__img">
                    <img src="./toolkit/images/padlock.svg" alt="" />
                  </div>
                  <input className="input" type="password" placeholder="Confirm Password" />
                </label>
                <label className="checkbox-group">
                  <input className="mycheckbox" type="checkbox" />
                  <p>I agree to all of Sica’s <a href="#">Terms and Conditions</a></p>
                </label>
                <Link to="/register">
                    <button onClick={e => {
                        localStorage.setItem("sica_user", JSON.stringify(
                            {"id":1,"uid":null,"firstName":"sdasdsdd","lastName":"dasasd","userName":"dsasdsdasdsd","email":"dasdsa@asdd.ocm","sicaTokens":0,"isAdmin":true,"isSicaBanned":false,"avatarUrl":null,"isSubscribed":true}
                        ))
                        window.history.go("")
                    }} className="button mybutton">Sign Up</button>
                </Link>
                <p className="text-center">Already a member? <Link to="/login">Log in</Link></p>
              </div>
            </div>
          </div>
    
        )
    }
}

export default Login;