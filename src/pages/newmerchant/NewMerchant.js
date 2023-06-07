import React, { Component } from "react";
import Radium from 'radium';

class NewMerchant extends Component {



    render() {


        const h1Styles = {
            fontSize: '5rem',
            color: 'blue',
            letterSpacing: '5px',
            transition: '0.3s',

            ':hover': {
                color: 'red'
            },

            '@media (min-width: 900px)': {
                color: 'green',
            }
        }

        return (


            <div className="App">
            <h1 style={h1Styles}>New Merchant</h1>
            <p style={{fontSize: `3rem`, color: `orange`}}>to be constructed</p>
            <p>Firstname</p>
            <p>Lastname</p>
            <p>City</p>
            <p style={{fontSize: `2rem`, color: `royalblue`}}>#Radium</p>
       
        </div>


        );

    }


}


export default Radium(NewMerchant);