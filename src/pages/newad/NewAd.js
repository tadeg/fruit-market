import React, { useState, createContext, useContext } from "react";
import styled from 'styled-components';
import BurgerMenuAd from "../../components/BurgerMenuAd/BurgerMenuAd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ClockOnSite from "../../components/ClockOnSite/ClockOnSite";


const ContainterDiv = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(rgba(9, 184, 224, 0.586), rgba(0, 0, 0, 0.7));
    }
`;

const StyleTitle = styled.p`
    font-size: 5rem;
    font-weight: 100;
    color: #fff;
    letter-spacing: 5px;
    transition: 0.3s;
    @media (max-width: 500px) {
        font-size: 2rem,
        color: green;
    }
    `;

    const StyleForm = styled.form`
        display: flex;
        flex-direction: column;
    `;

    const StyleInput = styled.input` 
        width: 40vw;
        margin-bottom: 1rem;
        padding: 1rem 5rem;
        border-radius: 2rem;
        background-color: transparent;
        border: 0.1rem solid #fff;
        color: #fff;
        letter-spacing: 0.2rem;
        font-size: 1.3rem;
        &::placeholder {
            color: #444;
        };  
    `;

    const StyleButton = styled.button` 
        width: 40vw;
        margin-bottom: 1rem;
        padding: 1rem 5rem;
        border-radius: 2rem;
        background-color: transparent;
        border: 0.1rem solid #fff;
        color: #fff;
        letter-spacing: 0.2rem;
        font-size: 1.3rem;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
            color: rgba(4, 131, 157, 0.586);
            background-color: #fff;
        };  
    `;

        const SummaryWrapper = styled.section`
            width: 100vw;
            height: 30vh;
            padding: 2rem 5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 2.8rem;
            font-weight: 600;
            background-color: #333;
            color: #fff;
            @media (max-width: 500px) {
                font-size: 2rem;
            }
        `

        const StyleDatePicker = styled.div` 
            width: 40vw;
            margin-bottom: 1rem;
            padding: 1rem 5rem;
            border-radius: 2rem;
            background-color: transparent;
            border: 0.1rem solid #fff;
            color: #fff;
            letter-spacing: 0.2rem;
            font-size: 1.3rem;
            &::placeholder {
                color: #444;
            };  
    `;




const AdContext = createContext();



const Advertisement = () => {

    const [ fruit, setFruit ] = useState("");
    const [ amouth, setAmouth ] = useState("");
    const [ price, setPrice ] = useState("");

    return (

        <div>
            <AdContext.Provider
                value={{ fruit, amouth, price, setFruit, setAmouth, setPrice }}
            >
                <NewAd />
                    <SummaryWrapper>
                        <p style={{color: `#999`}}>Your entered advertisement data:</p>
                        <p>Fruit: {fruit} </p>
                        <p>Amount: {amouth} kg</p>
                        <p>Price per kg: {price} PLN</p>
                        <p style={{color: `rgb(65, 105, 225)`}}>Total price: {amouth*price} PLN</p>
                    </SummaryWrapper>        
      
            </AdContext.Provider>
        </div> 

    );

}



const NewAd = () => {


    const value = useContext(AdContext);

    const submitAdd = () => {
    alert('Hello! Backend part of this website to be built 🔧 📝 😎 ')
    }

    const [startDate, setStartDate] = useState(new Date());



        return(


            <ContainterDiv>
                
                <BurgerMenuAd/>
                <ClockOnSite/>

                <StyleTitle>
                <p>New advertisement</p>
                </StyleTitle> 

                <StyleForm>
                    <StyleInput type="text" placeholder="Enter Fruit ..." onChange={e => value.setFruit(e.target.value)} />
                    <StyleInput type="text" placeholder="Enter amount in kg ..."  onChange={e => value.setAmouth(e.target.value)} />
                    <StyleInput type="text" placeholder="Enter price per kg ..." onChange={e => value.setPrice(e.target.value)} />
                    {/* <StyleInput type="text" placeholder="Valid until ..." onChange={e => value.setPrice(e.target.value)} /> */}

                    <StyleDatePicker>
                    Valid until ...
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </StyleDatePicker>
                    
                    
                    {/* <StyleInput type="reset" value="Clear data" /> */}
                    {/* <StyleInput type="submit" value="Submit this advertisement!"></StyleInput> */}
              
              
                </StyleForm>

                <StyleButton onClick={submitAdd}>Submit this advertisement!</StyleButton>

        
        

       
         
            </ContainterDiv>

        );

    }



// export default NewAd;
export default Advertisement;