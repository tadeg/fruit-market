import React from "react";
import styled from 'styled-components';
import FruitCard from "../../components/FruitCard/FruitCard";
// import '../../css/Fruit.css';

import GrapesPhoto from "../../img/grapes.jpg";

const FruitContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-scheme-first);
    background-color: var(--color-scheme-first);
    @media (min-width: 900px) {}`;


const FruitContainerH1 = styled.div`
    margin: 3rem 0;
    font-family: 'Outfit', sans-serif;
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
    color: #3e3e3e;`;

const NotesWrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 3rem;
    padding-bottom: 10rem;`;



const Fruits = () => {

    return (

        <FruitContainerDiv>
            <FruitContainerH1>Market Advertisements</FruitContainerH1>            
            <NotesWrapper>
                <FruitCard fruitname="Apple" fruitphoto="${GrapesPhoto}"/>
                <FruitCard fruitname="Blueberry"/>
                <FruitCard fruitname="Watermelon"/>
                <FruitCard fruitname="Banana"/>
                <FruitCard fruitname="Kiwi"/>
                <FruitCard fruitname="Grapes"/>
                <FruitCard fruitname="Orange"/>
                <FruitCard fruitname="Lemon"/>
                <FruitCard fruitname="Strawberry"/>
            </NotesWrapper>
        </FruitContainerDiv>
    );
}

export default Fruits;