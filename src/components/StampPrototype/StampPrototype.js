import React from "react";
import styled from 'styled-components';


const StampPrototypeGraph = styled.div`
    position: absolute;
    top: 2.5vh;
    right: 2vw;
    height: 10vh;
    width: 10vh;
    padding: 0.5vh 0.3vw;
    border-radius: 50%;
    background-color: #0000ff;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 900px) {};
`;

const StampPrototypeText = styled.p`
    font-size: 12px;
    color: white;
    text-align: center;
    @media (max-width: 900px) { 
        font-size: 10px;};
`;


const StampPrototype = () => {

    return (

        <StampPrototypeGraph>
            <StampPrototypeText>
                <p>Prototype website</p>
                </StampPrototypeText>
        </StampPrototypeGraph>
        
    );

}

export default StampPrototype;
