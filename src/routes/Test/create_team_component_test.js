import React from "react"
import CreateTeam from "../../components/CreateTeam";

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
                </CreateTeam>
            </React.Fragment>
        )
    }
}

export default Test;