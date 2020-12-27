import React from "react"
import CreateTeam from "../../components/CreateTeam";
import InviteToTeam from "../../components/InviteToTeam"

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <React.Fragment>
                <CreateTeam>
                    {({
                        form_jsx,
                        validation_error_messages: v_errors,
                        getErrorsJSXCustom,
                        ...props
                    }) => {
                        console.log({props})
                        return <React.Fragment>
                            {form_jsx}
                        </React.Fragment>
                    }}
                </CreateTeam><br/><br/>

                <InviteToTeam>
                    {({
                        form_jsx,
                        validation_error_messages: v_errors,
                        getErrorsJSXCustom,
                        ...props
                    }) => {
                        console.log({props})
                        return <React.Fragment>
                            {form_jsx}
                        </React.Fragment>
                    }}
                </InviteToTeam><br/><br/>

            </React.Fragment>
        )
    }
}

export default Test;