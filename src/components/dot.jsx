import React from 'react'

import styled from 'styled-components';


const StyledDot = styled.div`

height: 6px;
width: 6px;
background-color: #0059ff;
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
