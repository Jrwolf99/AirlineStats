import React from 'react'

import styled from 'styled-components';


const StyledDot = styled.div`

height: 8px;
width: 8px;
background-color: #0059ff;
border-radius: 50%;
position: absolute;

left: ${props => props.x}px;
bottom: ${props => props.y}px;


&:hover {
    background-color: #002468;
}



`;


export default function Dot({ x, y, airport, airports, setAirports }) {


    const isAirportInList = () => {
        for (let i = 0; i < airports.length; i++) {
            if (airports[i].iata_code === airport.iata_code) {
                console.log("here")
                return true;
            };
        }
        return false;

    }

    const handleDotClick = () => {
        if (isAirportInList()) return;
        setAirports([...airports, airport]);
    }


    return (
        <StyledDot x={x} y={y} onClick={handleDotClick}></StyledDot>
    )
}
