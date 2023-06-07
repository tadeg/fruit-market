import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../../css/BurgerMenuHome.css";


class BurgerMenuAd extends Component {

constructor(props) {
    super(props);

    this.state = {
        burgerStyles: ['burger'].join(' '),
        icoBurgerStyles: ['fas', 'fa-bars', 'show'].join(' '),
        icoXStyles: ['fas', 'fa-times'].join(' '),
        menuStyles: ['formenu'].join(' ')
    };
}
 
    openMenuHandler = () => {
        let icoBurgerStylesHn = ['fas', 'fa-bars'].join(' ');
        let icoXStylesHn = ['fas', 'fa-times', 'show'].join(' ');
        let menuStylesHn = ['formenu', 'show'].join(' ');

        this.setState ({
            icoBurgerStyles: icoBurgerStylesHn,  
            icoXStyles: icoXStylesHn,
            menuStyles: menuStylesHn
        })
    }

    closeMenuHandler = () => {
        let icoBurgerStylesHn = ['fas', 'fa-bars', 'show'].join(' ');
        let icoXStylesHn = ['fas', 'fa-times'].join(' ');
        let menuStylesHn = ['formenu'].join(' ');

        this.setState ({
            icoBurgerStyles: icoBurgerStylesHn,  
            icoXStyles: icoXStylesHn,
            menuStyles: menuStylesHn
        })

  
    }



    render () {

    return (

    <div>
        <div className={this.state.burgerStyles}>
            <i className={this.state.icoBurgerStyles} onClick={this.openMenuHandler} ></i>  
            <i className={this.state.icoXStyles} onClick={this.closeMenuHandler} ></i>  
        </div>
      

        <aside className={this.state.menuStyles}>
            <ul>
                <li className="menuitem"><Link to='/'>Homepage</Link></li>
                {/* <li className="menuitem"><Link to='/newmerchant'>New Merchant</Link></li> */}
                {/* <li className="menuitem"><Link to='/viewads'>View Advertisements</Link></li> */}
                {/* <li className="menuitem"><Link to='/viewads'>Function 2</Link></li> */}
            </ul>
        </aside>

    </div>

        )
    }
}


export default BurgerMenuAd;