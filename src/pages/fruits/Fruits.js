import React, { useState } from "react";
import styled from 'styled-components';
import FruitCard from "../../components/FruitCard/FruitCard";
import BlueberryPhoto from "../../img/blueberry.jpg";
import ApplePhoto from "../../img/apple.jpg";
import NectarinePhoto from "../../img/nectarine.jpg";
import ApricotPhoto from "../../img/apricot.jpg";
import GrapesPhoto from "../../img/grapes.jpg";
import OrangePhoto from "../../img/orange.jpg";
import LemonPhoto from "../../img/lemon.jpg";
import WatermelonPhoto from "../../img/watermelon.jpg";
import MangoPhoto from "../../img/mango.jpg";
import KiwiPhoto from "../../img/kiwi.jpg";
import GrapfruitPhoto from "../../img/grapefruit.jpg";
import MelonPhoto from "../../img/melon.jpg";



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


    const [photos, setPhotos] = useState(
        [
            ApplePhoto, 
            BlueberryPhoto, 
            NectarinePhoto,
            ApricotPhoto,
            GrapesPhoto,
            OrangePhoto,
            LemonPhoto,
            WatermelonPhoto,
            MangoPhoto,
            KiwiPhoto,
            GrapfruitPhoto,
            MelonPhoto
        ]);

    return (

        <FruitContainerDiv>
            <FruitContainerH1>Market Advertisements</FruitContainerH1>            
            <NotesWrapper>
                <FruitCard fruitname="Apple" fruitphoto={photos[0]}/>
                <FruitCard fruitname="Blueberry" fruitphoto={photos[1]}/>
                <FruitCard fruitname="Nectarine" fruitphoto={photos[2]}/>
                <FruitCard fruitname="Apricot" fruitphoto={photos[3]}/>
                <FruitCard fruitname="Grapes" fruitphoto={photos[4]}/>
                <FruitCard fruitname="Orange" fruitphoto={photos[5]}/>
                <FruitCard fruitname="Lemon" fruitphoto={photos[6]}/>
                <FruitCard fruitname="Watermelon" fruitphoto={photos[7]}/>
                <FruitCard fruitname="Mango" fruitphoto={photos[8]}/>
                <FruitCard fruitname="Kiwi" fruitphoto={photos[9]}/>
                <FruitCard fruitname="Grapefruit" fruitphoto={photos[10]}/>
                <FruitCard fruitname="Melon" fruitphoto={photos[11]}/>
            </NotesWrapper>
        </FruitContainerDiv>
    );
}

export default Fruits;