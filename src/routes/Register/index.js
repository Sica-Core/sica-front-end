import React from "react";
import RegisterForm from "../../components/RegisterForm";

const Register = props => (
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
            <RegisterForm/>
        </div>
    </div>
)

export default Register;