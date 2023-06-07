import React from 'react';
import styled from 'styled-components';
// import '../../css/Header.css';
// import BurgerMenuHome from '../BurgerMenuHome/BurgerMenuHome';
import background from "../../img/main-bg.jpg";


const HeaderDiv = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 75vh;
`;

const SiteTitleDiv = styled.div`
    /* width: 100%; */
    /* height: 100%; */
    padding: 3vh 5vw;
    /* font-family: Georgia, 'Times New Roman', Times, serif; */
    /* font-family: 'Karla', sans-serif; */
    font-family: 'Outfit', sans-serif;
    font-size: 8rem;
    color: #fff;
    text-align: center;
    /* background: linear-gradient(rgba(34, 9, 9, 0.7), rgba(0, 0, 0, 0.7)); */
`;

const IcoDiv = styled.div`
    display: inline-block;
    margin: 0 1vw;
    // font-size: 7rem;
`;

const Header = () => {

    return (

        <HeaderDiv>
            {/* <BurgerMenuHome /> */}
                <SiteTitleDiv>
                    <h2>Fruit Market</h2>
                    <h5>Natural Strength!</h5>
                    <h3>
                        <IcoDiv>
                        <i class="fa-solid fa-apple-whole"></i>
                        </IcoDiv>
                        <IcoDiv>
                        <i class="fa-regular fa-lemon"></i>
                        </IcoDiv>
                        <IcoDiv>
                        <i class="fa-solid fa-lemon"></i>
                        </IcoDiv>
                    </h3>
                </SiteTitleDiv>
        </HeaderDiv>
    );
}

export default Header;
