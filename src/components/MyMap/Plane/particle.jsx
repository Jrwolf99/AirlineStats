import React from 'react'
import styled from 'styled-components';


const StyledParticle = styled.div`

height: 8px;
width: 8px;
border-radius: 50%;

position: absolute;
left: ${props => props.x}px;
bottom: ${props => props.y}px;
background-color: ${props => props.color};
`;



export default function Particle({ x, y, color }) {
    return (
        <StyledParticle color={color} x={x} y={y}></StyledParticle>
    )
}
