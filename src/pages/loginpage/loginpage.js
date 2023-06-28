import React, { Component } from "react";
import { connect } from "react-redux";
import { loginActions } from "../../actions/loginActions";
import PropTypes from "prop-types";
import styled from 'styled-components';

import { LoginStatusDisplay } from "../../components/LoginStatusDisplay/LoginStatusDisplay";
import BurgerMenuAd from "../../components/BurgerMenuAd/BurgerMenuAd";


import background from "../../img/main-bg.jpg";



const WrapperDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: red; 
    // background-image: url(${background});    
    // background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 0, 0.7)), url(${background}) center no-repeat;
    `;


const ContainerDiv = styled.div`
    width: 60vw;
    height: 60vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
    // background-color: blue;
    background: linear-gradient(rgba(9, 184, 224, 0.586), rgba(0, 0, 0, 0.7));
    box-shadow: 1rem 2rem 2rem rgba(0, 0, 0, 0.5);
    border-radius: 3rem;
    cursor: pointer;

    transition:  box-shadow 0.3s;
    &:hover {
        box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.5);
    };  

    `;


const StyleTitle = styled.p`
    font-size: 5rem;
    font-weight: 100;
    color: #fff;
    letter-spacing: 5px;
    @media (max-width: 500px) {
        font-size: 2rem,
        color: green;
    }
    `;


const StyleForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyleInput = styled.input` 
    width: 40vw;
    margin-top: 1rem;
    padding: 1rem 5rem;
    border-radius: 2rem;
    background-color: transparent;
    border: 0.1rem solid #fff;
    color: #fff;
    letter-spacing: 0.2rem;
    font-size: 1.3rem;
    &::placeholder {
        color: #444;
    };  
`;

const StyleButton = styled.button` 
    width: 40vw;
    margin: 1rem 0 3rem;
    padding: 1rem 5rem;
    border-radius: 2rem;
    background-color: transparent;
    border: 0.1rem solid #fff;
    color: #fff;
    letter-spacing: 0.2rem;
    font-size: 1.3rem;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        color: rgba(4, 131, 157, 0.586);
        background-color: #fff;
    };  
`;





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



        const divNoteStyles = {
            width: '70%',
            margin: '0 2rem',
            fontSize: '1rem'
        };

        const divNoteAddStyles = {
            width: '70%',
            margin: '0 2rem',
            fontSize: '2rem',
            position: 'absolute',
            top: '20vh',
            left: '10vw',
            color: 'rgb(243, 158, 0)'

        };

        const alertStyles = {
            width: '100%',
            height: '1rem',
            color: 'red',
            fontSize: '1rem'
            // backgroundColor: 'red'
        }
        



        return (

            <WrapperDiv>  
             <BurgerMenuAd />
             
                        {!isLogged &&  (


                            <ContainerDiv>


                          
                            
                            <StyleTitle>
                                    <p>Log In</p>
                            </StyleTitle> 


                            <div>

                                <div style={divNoteStyles}>
                                    <h3>Dev/tst info:</h3>
                                    <p>test username: janet.weaver@reqres.in</p>
                                    <p>test password: any password, not set</p>
                                    <p>login additional confirmation: browser dev tools\Application\Storage\Local Storage contains JWT token data</p>
                               
                                {loginPending && (
                                    <div style={alertStyles}>
                                    Login in progress...
                                    </div>
                                                              
                                    )}

                                </div>

                            </div>

                                {/* <form onSubmit={this.handleSubmit}> */}
                                <StyleForm onSubmit={this.handleSubmit}>

                                    <div>
                                        {/* <label htmlFor="username">Username</label> */}
                                        {/* <input */}
                                        <StyleInput
                                        type="text"
                                        name="username"
                                        value={username}
                                        placeholder="Enter Username..." 
                                        onChange={this.handleEnter}
                                        />

                                            {userNameError && (
                                            <div style={alertStyles}>
                                                Username is required!
                                            </div>
                                )}
                                    </div>

                                    <div>
                                    {/* <label htmlFor="password">Password</label> */}
                                        {/* <input */}
                                        <StyleInput
                                        type="password"
                                        name="password"
                                        value={password}
                                        placeholder="Enter Password..." 
                                        onChange={this.handleEnter}
                                        />
                                            {passwordError && (
                                            <div style={alertStyles}>
                                            Password is required!
                                            </div>
                                )}
                                    </div>

                                    <div>
                                        {/* <button>Log In</button> */}
                                        <StyleButton>Log In</StyleButton>
                                    </div>

                                {/* </form> */}
                                </StyleForm>

                        
                            </ContainerDiv>
                        )}


                        {isLogged && (     
                               <div style={divNoteAddStyles}>
                                Merchant Profile - to be built
                               </div>
                             
                            )}

            </WrapperDiv>      
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

