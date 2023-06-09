import React from "react";
import styled from 'styled-components';


const FruitDiv = styled.div`
    width: 20rem;
    min-height: 25rem;
    margin: 2rem;
    border-radius: 2rem;
    background-color: #333;
    background-color: rgb(51, 51, 51);
    background-color: rgb(100, 155, 137);
    background-color: rgb(119, 8, 8);
    background-color: rgb(9, 79, 141);
    background-color: rgb(131, 22, 104);
    box-shadow: .5rem .5rem 3rem rgba(0, 0, 0, 0.8);
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 2rem 2rem 6rem rgba(0, 0, 0, 0.8);
    }`

const FruitHeading = styled.div`
    width: 100%;
    height: 8vh;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem 2rem 2rem;
    padding: 2rem 0 2rem 0;
    border-radius: 2rem 2rem 0 0;

    font-family: 'Anybody', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(to right, rgb(0, 85, 255), rgb(251, 190, 114));`

const FruitContent = styled.div`
    padding: 2rem;
    font-size: 1.7rem;
    font-family: 'Poiret One', cursive;
    color: #fff;
`;

const FruitImage = styled.img`
    width: 100%;
    height: 10rem;;
`;

const StyleButton = styled.button` 
    width: 100%;
    margin: 1rem 0;
    padding: 1rem 1rem;
    border-radius: 2rem;
    background-color: transparent;
    border: 0.1rem solid #fff;
    color: #fff;
    letter-spacing: 0.2rem;
    font-size: 1rem;
    font-weight: 900;
    font-family: 'Poiret One', cursive;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        color: rgba(4, 131, 157, 0.586);
        background-color: rgb(237, 210, 230);
    };  
`;



const FruitCard = (props) => {


    const submitAdd = () => {
        alert('Hello! Backend part of this website to be built 🔧 📝 😎 ')
        }

    return (
                <FruitDiv>
                    <FruitHeading>
                        <h3>{props.fruitname}</h3>
                    </FruitHeading>
                    <FruitContent>
                        <FruitImage src={props.fruitphoto} />
                        {/* <button>New advertisement</button> */}
                        {/* <button>View advertisements</button> */}
                        <StyleButton onClick={submitAdd}>View advertisements</StyleButton>
                    </FruitContent>      
                </FruitDiv> 
    );
}

export default FruitCard;