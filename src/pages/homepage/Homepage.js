import React, { Component } from "react";
import UpHeader from "../../components/UpHeader/UpHeader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Fruits from "../fruits/Fruits";
import styled from 'styled-components';
// import '../../css/Homepage.css';


const homepageDiv = styled.div`
height: 100vh`;

class Homepage extends Component {

    render() {


        return(
            <homepageDiv>
                <UpHeader/>
                <Header/>
                <Fruits/>
                <Footer/>
            </homepageDiv>
        )
    }
}

export default Homepage;