import React, { useEffect } from 'react'
import styled from 'styled-components';
import { IoAirplane } from "react-icons/io5"
import useProjection from '../../../hooks/useProjection';
import usePlane from './usePlane';


const StyledPlane = styled.div`
color: #ffffff;
font-size: 2rem;
border-radius: 50%;
position: absolute;
left: ${props => props.x}px;
bottom: ${props => props.y}px;
transition:  all 1s ease-out;
`;

const StyledIcon = styled.div`
transform: rotate(${props => props.angle});
transition:  all .2s;
`;





export default function Plane({ airports }) {

    const { findAirportCoords, findAngle } = usePlane();
    let [x, y] = findAirportCoords(airports, airports.length - 1);

    let angle = 0;
    if (airports.length > 1) {
        angle = findAngle(airports);
        console.log("ANGLE: ", angle)
    }




    return (
        <StyledPlane x={x} y={y} >
            <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#3451b9" offset="50.48%" />
                    <stop stopColor="#FAAE19" offset="63.88%" />
                    <stop stopColor="#E41B22" offset="100%" />
                </linearGradient>
            </svg>
            <StyledIcon angle={`${-angle}deg`}>
                <IoAirplane style={{ fill: "url(#blue-gradient", stroke: "white", strokeWidth: "20" }} />
            </StyledIcon>
        </ StyledPlane>


    )
}
