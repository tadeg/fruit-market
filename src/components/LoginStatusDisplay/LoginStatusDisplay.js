import React from "react";
import { connect } from "react-redux";


const LoginStatusDisplay = (props) => {
    
    let userDataToDisp = "";
    const { isLogged } = props;
    const user = localStorage.getItem("account");

    if (user && isLogged ) {
        userDataToDisp = JSON.parse(JSON.parse(user).config.data).username;
    }
    
    return 
        <div>
            {isLogged && <h5>Hello, {userDataToDisp}</h5>}
        </div>;
};


const mapStateToProps = (state) => {
    return {
        isLogged: state.loginReducer.isLogged
    };
}


const connectedLoginStatusDisplay = connect(mapStateToProps)(LoginStatusDisplay);
export { connectedLoginStatusDisplay as LoginStatusDisplay};