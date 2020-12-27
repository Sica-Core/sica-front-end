import React from "react";
import Form from "../Form";
import Request from "../Request";

class CreateTeam extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <Request method="POST" path="/Team/team">
                {({loading,error_messages,error,data,sendRequest}) => {
                    return (
                        <Form
                            error_messages={error_messages}
                            fields={[
                                { key: "TeamName", label: "Team Name", required: true },
                                { key: "GameName", label: "Game Name", required: true },
                            ]}
                            submit_button_value={loading ? "loading" : "submit"}
                            onSubmit={
                                async data => 
                                    loading 
                                    ? 
                                    undefined : 
                                    await sendRequest(data)
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

export default CreateTeam;