import React from 'react'

import styled from 'styled-components';


const StyledDot = styled.div`

height: 8px;
width: 8px;
background-color: transparent;
border-radius: 50%;
border: 2px solid #0059ff;
position: absolute;
pointer-events: none;

left: ${props => props.x}px;
bottom: ${props => props.y}px;



`;


export default function Dot({ x, y }) {
    return (
        <StyledDot x={x} y={y}></StyledDot>
    )
}
