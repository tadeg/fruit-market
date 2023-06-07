import React from "react";
import styled from 'styled-components';


const StampFictBusUnitText = styled.div`
    position: fixed;
    top: 3vh;
    right: 15vw;
    // line-height: 15vh;
    font-size: 1.2rem;
    font-weight: 900;
    color: rgb(173, 215, 230);
    background-color: transparent;
    letter-spacing: 3px;
    z-index: 1;

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
    
`;


const StampFictBusUnit = () => {

    return (

        <StampFictBusUnitText>
            <p>Fictional business unit</p>
            </StampFictBusUnitText>
    );
    
}

export default StampFictBusUnit;
