import React from "react";
import { connect } from "react-redux";


const LoginStatusDisplay = (props) => {
    
    let userDataToDisp = "";
    const { isLogged } = props;
    const user = localStorage.getItem("account");

    const divStyles = {
        marginTop: '80px',
        fontSize: '2rem',
        color: 'rgb(35, 142, 35)'
    };

    if (user && isLogged ) {
        userDataToDisp = JSON.parse(JSON.parse(user).config.data).username;
    }
    
    return (
        <div style={divStyles}>
            {isLogged && <h5>Hello, {userDataToDisp}!</h5>}
        </div>);
};


const mapStateToProps = (state) => {
    return {
        isLogged: state.loginReducer.isLogged
    };
}


const connectedLoginStatusDisplay = connect(mapStateToProps)(LoginStatusDisplay);
export { connectedLoginStatusDisplay as LoginStatusDisplay};