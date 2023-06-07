import React from "react";
import styled from 'styled-components';


const StampUnderConstructionText = styled.div`
    position: fixed;
    top: 5.5vh;
    right: 15vw;
    // line-height: 15vh;
    font-size: 1.2rem;
    font-weight: 900;
    color: rgb(255, 135, 116);
    background-color: transparent;
    letter-spacing: 3px;
    z-index: 1;

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;


const StampUnderConstruction = () => {

    return (
        <StampUnderConstructionText>
            <p>Website under construction</p>
        </StampUnderConstructionText>
    );
}

export default StampUnderConstruction;
