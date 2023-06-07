import React from 'react';
import styled from 'styled-components';
import BurgerMenuHome from '../BurgerMenuHome/BurgerMenuHome';
import StampPrototype from '../StampPrototype/StampPrototype';
import StampUnderConstruction from '../StampUnderConstruction/StampUnderConstruction';
import StampFictBusUnit from '../StampFictBusUnit/StampFictBusUnit';
// import '../../css/UpHeader.css';

const UpHeaderDiv = styled.div`
width: 100vw;
height: 15vh;
`;

const UpHeader = () => {

    return (
        <UpHeaderDiv>
            <BurgerMenuHome />
            <StampPrototype />
            <StampUnderConstruction />
            <StampFictBusUnit />
        </UpHeaderDiv>
    );
}

export default UpHeader;
