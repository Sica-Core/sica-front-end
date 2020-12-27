import React from "react";
import Form from "../Form";
import Request from "../Request";

class InviteToTeam extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <Request json_body method="POST" path="/Team/inviteToTeam">
                {({loading,error_messages,error,data,sendRequest}) => {
                    return (
                        <Form
                            error_messages={error_messages}
                            fields={[
                                { key: "From", type: "number", label: "From", required: true },
                                { key: "To", type: "number", label: "To", required: true },
                                { key: "GameName", label: "GameName", required: true },
                            ]}
                            submit_button_value={loading ? "loading" : "submit"}
                            onSubmit={
                                async data => 
                                    loading 
                                    ? 
                                    undefined : 
                                    await sendRequest({...data,...(this.props.data)})
                            }
                        >
                            {props => {
                                let { error_messages: validation_error_messages, ...rest} = props
                                return this.props.children({
                                    validation_error_messages, ...rest,
                                    loading,error_messages,error,data,sendRequest
                                })
                            }}
                        </Form>
                    )
                }}
            </Request>
        )
    }
}

export default InviteToTeam;