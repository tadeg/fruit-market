import React from 'react';
import Clock from 'react-live-clock';
import styled from 'styled-components';


const ClockStyled = styled.div`

position: absolute;
top: 1rem;
right: 4rem;
color: #fff;
font-size: 3rem;
font-weight: 100;
`;


export default class ClockOnSite extends React.Component {
    render() {

        return (
        <ClockStyled>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'BST'} />
        </ClockStyled>
        )
    }
}