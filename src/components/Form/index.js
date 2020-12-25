import React from "react";
import * as yup from "yup";

class Form extends React.Component {
    constructor(props){
        super(props);
        let state = {
            data: {},
            validations: {},
            error_messages: []
        }
        this.props.fields.map(field => {
            state.data[field.key] = ""
            state.validations[field.key] = field.validation || this.getValidation(field)
        })
        this.schema = yup.object().shape(state.validations)
        this.state = state;
    }
    setErrorMessages = errors => this.setState({error_messages: errors })
    getValidation = field => {
        let validation;
        let type = field.type || "text"
        switch (type){
            case "text": { validation = yup.string(); break; }
            case "email": { validation = yup.string().email(); break; }
            case "number": { validation = yup.number(); break; }
            case "integer": { validation = validation.integer(); break; }
            case "positive": { validation = validation.positive(); break; }
        }
        // if (validation && field.required) return validation.required()
        return validation;
    }
    onChange = key => e => {
        let { value } = e.target;
        this.setState(prevState => {
            prevState.data[key] = value;
            return prevState;
        })
    }
    checkValidations = async args => {
        try {
            console.log(args)
            let val = await this.schema.validate(args, { abortEarly: false });
            return val
        } catch (err) {
            this.setErrorMessages(err.errors)
            return 0
        }
    }
    onSubmit = async e => {
        e.preventDefault();
        this.setErrorMessages([])
        console.log(this.state.data,this.state.validations)
        let data = await this.checkValidations(this.state.data)
        if (!data) return;
        this.props.onSubmit(data)
    } 
    render(){
        if (this.props.children) {
            let { error_messages, fields } = this.state;
            return this.props.children({
                error_messages, fields, ...this.props
            })
        }
        return (
            <form onSubmit={this.onSubmit}>
                { 
                    this.state.error_messages.concat(
                        this.props.error_messages || []
                    ).map(x => <p style={{color: "red"}}>{x}<br/></p>)
                }
                {this.props.fields.map(field => (
                    <React.Fragment>
                        {field.label}:
                        <input 
                            type={field.type || "text"} 
                            value={this.state.data[field.key]}
                            onChange={this.onChange(field.key)}
                        /><br/>
                    </React.Fragment>
                ))}
                <input type="submit" value={this.props.submit_button_value || "submit"}/>
            </form>
        )
    }
}

export default Form;