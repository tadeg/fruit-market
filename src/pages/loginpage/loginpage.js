import React, { Component } from "react";
import { connect } from "react-redux";
import { loginActions } from "../../actions/loginActions";
import PropTypes from "prop-types";
import styled from 'styled-components';

import { LoginStatusDisplay } from "../../components/LoginStatusDisplay/LoginStatusDisplay";
import BurgerMenuAd from "../../components/BurgerMenuAd/BurgerMenuAd";

const loginpageDiv = styled.div`
    width: 100%
    height: 20vh;
    background-color: red`;


    
class Loginpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            userNameError: false,
            passwordError: false
        };
    }

    handleEnter = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { username, password } = this.state;
        if(!username) {
            this.setState({ userNameError: true });
        }
        if(!password) {
            this.setState({ passwordError: true });
        }
        if (username && password) {
            await this.props.dispatch(loginActions.login(username, password));
        }
    };


    render() {
        const { loginPending, isLogged } = this.props;
        const { username, password, userNameError, passwordError } = this.state;
        const divStyles = {
            margin: '100px 20px',
            fontSize: '1.5rem'
        };

        return (

            <loginpageDiv>
             {/* <div> */}
            
             <BurgerMenuAd />
                        {!isLogged &&  (
                            <div style={divStyles}>
                                <h2>Login</h2>
                                <h3>Dev/tst info:</h3>
                                <p>test username: janet.weaver@reqres.in</p>
                                <p>test password: any password, not set</p>
                                <p>login additional confirmation: browser dev tools\Application\Storage\Local Storage contains JWT token data</p>
                                {loginPending && "Login in progress..."}
                                {userNameError && (
                                    <div>
                                        Username is required
                                    </div>
                                )}
                                {passwordError && (
                                    <div>
                                        Password is required
                                    </div>
                                )}

                                <form onSubmit={this.handleSubmit}>

                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={this.handleEnter}
                                        />
                                    </div>

                                    <div>
                                    <label htmlFor="password">Password</label>
                                        <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={this.handleEnter}
                                        />
                                    </div>

                                    <div>
                                        <button>Log In</button>
                                    </div>

                                </form>
                        
                            </div>
                        )}

            {/* </div>   */}
            </loginpageDiv>      
        );
    }


static propTypes = {
    dispatch: PropTypes.func,
    attributesUpdate: PropTypes.func,
    loginPending: PropTypes.bool,
    isLogged: PropTypes.bool
};

}


const mapStateToProps = (state) => {
    return {
        loginPending: state.loginReducer.loginPending,
        isLogged: state.loginReducer.isLogged
    };
}


const connectedLoginpage = connect(mapStateToProps)(Loginpage);
export { connectedLoginpage as Loginpage};