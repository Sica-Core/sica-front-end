import React from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Request from "../../components/Request";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    login = user => {
        localStorage.setItem("sica_user", JSON.stringify(user));
        window.history.go("")
    }
    render(){
        return (
            <React.Fragment>
                <Header/>
                <Request method="POST" path="/User/user">
                    {({loading,error_messages,error,data,sendRequest}) => {
                        return (
                            <Form
                                error_messages={error_messages}
                                fields={[
                                    { key: "FirstName", label: "First Name", required: true },
                                    { key: "LastName", label: "Last Name", required: true },
                                    { key: "Username", label: "Username", required: true },
                                    { key: "Email", label: "Email", type: "email", required: true },
                                ]}
                                submit_button_value={loading ? "loading" : "submit"}
                                onSubmit={
                                    async data => 
                                        loading ? 
                                            undefined : 
                                                this.login(
                                                    (await sendRequest(data)).result
                                                )
                                }
                            />
                        )
                    }}
                </Request>
            </React.Fragment>
        )
    }
}

export default Register;