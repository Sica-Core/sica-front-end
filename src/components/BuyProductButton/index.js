import React from "react";
import injectUser from "../../HoC/injectUser";
import Request from "../Request";


class BuyProductButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <Request headers={{
                "Content-Type": "application/json"
            }} json_body={true} method="POST" path="/Shop/buy">
                {({loading,error_messages,error,data,sendRequest}) => {
                    if (loading) 
                        return <button className="button">Buying...</button>
                    if ((error_messages && error_messages.length) || error) 
                        return <button className="button">Failed to buy.</button>
                    return <button onClick={async () => {
                        let success = await sendRequest({
                            "Id": this.props.current_user.id,
                            "ProductId": this.props.product_id
                        })
                        if (success) this.props.onSuccess()
                    }} className="button">Buy</button>
                }}
            </Request>
        )
    }
}

export default injectUser(BuyProductButton);