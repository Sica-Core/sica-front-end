import React from "react";
import Request from "../components/Request";

export default WrappedComponent => {
    let current_user = localStorage.getItem("sica_user");
    if (current_user) current_user = JSON.parse(current_user);
    let _Comp = props => current_user ? (
        <Request method="GET" path={`/User/profile?Id=${current_user.id}`}>
            {({ loading, error, data, sendRequest }) => {
                let c_user = current_user;
                console.log({data})
                if (data) c_user = data
                if (c_user) localStorage.setItem("sica_user",c_user && JSON.stringify(c_user))
                return (
                    <WrappedComponent 
                        {...props} 
                        current_user={c_user}
                        user_refetch={() => {
                            console.log({sendRequest})
                            sendRequest()
                        }}
                    />
                )
            }}
        </Request>
    ) : (
        <WrappedComponent 
            {...props} 
            current_user={current_user}
        />
    )
    return _Comp;
}
