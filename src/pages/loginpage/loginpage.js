import React, { Component } from "react";
import { connect } from "react-redux";
import { loginActions } from "../..actions/loginActions";
import PropTypes from "prop-types";



class Loginpage extends React {

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

        return (

            <div>
                  
                        {!isLogged &&  (
                            <div>
                                <h2>Login</h2>
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
                                        <button>Log in</button>
                                    </div>

                                </form>
                            </div>
                        )}

            </div>        
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