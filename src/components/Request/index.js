import React from "react";
import axios from "../../axios";
import objectToFormData from "../../utils/objectToFormData";

class Request extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: undefined,
            data: undefined,
            error: undefined,
            error_messages: []
        }
        this.methodTypes = [ "POST", "GET", "DELETE", "PATCH", "PUT" ]
        if (this.methodTypes.indexOf(props.method) === -1) {
            throw new Error(`CustomAppError: Invalid method type ([ "POST", "GET", "DELETE", "PATCH", "PUT" ])`)
        }
    }
    sendRequestBase = async (options,updateCacheOnly) => {
        if (!updateCacheOnly) this.setState({
            loading: true
        })
        let return_data = false;
        try {
            let res = await fetch(options.url,options)
            console.log({res})
            let data = await res.json()
            let { statusCode, errors } = data;
            console.log({statusCode, errors})
            if (statusCode > 399){
                this.setState({ error_messages: errors.map(x => x.errorMessage )})
            } else {
                window.cacheClient.storeRequest(options, data)
                return_data = data;
                this.setState({ data: data.result || data })
            }
            this.setState({ loading: false })
        } catch (err) {
            console.log(err)
            if (!updateCacheOnly) this.setState({ error: err, loading: false })
        }
        return return_data;
    }
    sendRequest(data){
        console.log({data, formData: objectToFormData(data)})
        let options = {
            method: this.props.method,
            headers: {
                "Accept": "*/*",
                // "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "gzip, deflate, br",
                ...this.props.headers
            },
            url: window.__API_ENDPOINT__ + this.props.path
        }
        if (this.props.json_body) options.headers["Content-Type"] = "application/json"
        
        if (this.props.method !== "GET") {
            if (this.props.json_body) options.body = JSON.stringify(data)
            else options.body = objectToFormData(data)
        }
        console.log(window.__API_ENDPOINT__ + this.props.path,options)
        try {
            let cache = window.cacheClient.getRequest(options)
            console.log({cache})
            this.setState({ loading: false, error: undefined, data: cache.result || cache })
            return this.sendRequestBase(options,true)
        } catch (err){
            return this.sendRequestBase(options)
        }
    }
    componentDidMount(){
        console.log(this.props.method === "GET",this.props.method)
        if (this.props.method === "GET") return this.sendRequest();
    }
    render(){
        return this.props.children({ ...this.state, sendRequest: data => this.sendRequest(data)})
    }
}

export default Request;