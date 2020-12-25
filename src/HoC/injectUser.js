import React from "react";

export default WrappedComponent => {
    let current_user = localStorage.getItem("sica_user");
    if (current_user) current_user = JSON.parse(current_user);
    let _Comp = props => <WrappedComponent 
        {...props} 
        current_user={current_user}
    />
    return _Comp;
}
