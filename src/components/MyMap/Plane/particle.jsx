import React from 'react'
import styled, { keyframes } from 'styled-components';



const bubble = keyframes`
0% {
    transform: translateX(10px);
    opacity: 1;
  }
  50% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100%{
    transform: translateX(10px);
    opacity: 0;
}

`;


const StyledParticle = styled.div`
height: ${props => props.size * 1}px;
width: ${props => props.size * 1}px;
border-radius: 50%;
position: absolute;
left: ${props => props.x}px;
bottom: ${props => props.y}px;
background-color: ${props => props.color};
animation: ${bubble} ${props => props.size * .1}s ease infinite;

`;



export default function Particle({ color, size }) {
    return (
        <StyledParticle color={color} size={size}></StyledParticle>
    )
}
