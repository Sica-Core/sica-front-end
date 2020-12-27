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
        if (validation && field.required) return validation.required()
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
            console.log({args})
            let val = await this.schema.validate(args, { abortEarly: false });
            return val
        } catch (err) {
            this.setErrorMessages(err.errors)
            console.log("DDD",err.errors)
            return 0
        }
    }
    onSubmit = async e => {
        e.preventDefault();
        console.log(555)
        this.setErrorMessages([])
        console.log(this.state.data,this.state.validations)
        let data = await this.checkValidations(this.state.data)
        console.log({dddd:data})
        if (!data) return;
        this.props.onSubmit(data)
    } 
    getFieldsJSX = () => this.props.fields.map(field => (
        <React.Fragment>
            {field.label}:
            <input 
                type={field.type || "text"} 
                value={this.state.data[field.key]}
                onChange={this.onChange(field.key)}
            /><br/>
        </React.Fragment>
    ))
    getErrorsJSX = () => {
        let { error_messages } = this.state;
        let { error_messages: error_messages_2 } = this.props;
        console.log({error_messages,error_messages_2})
        let errors = error_messages;
        if (!errors.length) errors = error_messages_2 ? error_messages_2 : []
        if (this.props.error_messages) 
        return errors.map(x => <p style={{color: "red"}}>{x}<br/></p>)
    }
    getErrorsJSXCustom = errors => errors.concat(
        this.props.error_messages || []
    ).map(x => <p style={{color: "red"}}>{x}<br/></p>)
    getButtonJSX = () => (
        <input type="submit" value={this.props.submit_button_value || "submit"}/>
    )
    getFormJSX = () => (
        <form onSubmit={this.onSubmit}>
            {this.getErrorsJSX()}
            {this.getFieldsJSX()}
            {this.getButtonJSX()}
        </form>
    )
    render(){
        if (this.props.children) {
            let { error_messages } = this.state;
            let props = {
                fields: this.props.fields.map(f => {
                    f.onChange = this.onChange(f.key);
                    return f;
                }),
                fields_jsx: this.getFieldsJSX(),
                button_jsx: this.getButtonJSX(),
                errors_jsx: this.getErrorsJSX(),
                form_jsx: this.getFormJSX(),
                getErrorsJSXCustom: errors => this.getErrorsJSXCustom(errors),
                error_messages, ...this.props
            }
            return this.props.children(props)
        }
        return this.getFormJSX()
    }
}

export default Form;