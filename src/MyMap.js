import React from "react";
import USAMap from "react-usa-map";
import styled from "styled-components";

import Dot from "./components/dot";

import myAirports from "./data/USAirports.json";

import useProjection from "./hooks/useProjection";

const StyledMap = styled.div`
  position: relative;
  width: 1000px;
  margin: 0;

  /* path {
    pointer-events: all;
  }
  path:hover {
    opacity: 0.5;
    cursor: pointer;
  } */
`;

//latitude and longitude of the US starts at 125
export default function MyMap({ airports, setAirports }) {
  const { albersCalculateXY } = useProjection();
  const scale = 1250;
  const shiftX = 494;
  const shiftY = 291;

  return (
    <StyledMap>
      {myAirports.map((airport) => {
        let [myX, myY] = albersCalculateXY(
          airport.longitude_deg,
          airport.latitude_deg
        );
        myX = myX * scale + shiftX;
        myY = myY * scale + shiftY;

        if (airport.iso_region === "US-HI")
          return (
            <Dot
              x={276}
              y={60}
              key={airport.id}
              airport={airport}
              airports={airports}
              setAirports={setAirports}
            />
          );
        if (
          airport.iso_region === "US-AK" &&
          airport.municipality === "Anchorage"
        )
          return (
            <Dot
              x={120}
              y={62}
              key={airport.id}
              airport={airport}
              airports={airports}
              setAirports={setAirports}
            />
          );

        if (
          airport.iso_region === "US-AK" &&
          airport.municipality === "Fairbanks"
        )
          return (
            <Dot
              x={130}
              y={90}
              key={airport.id}
              airport={airport}
              airports={airports}
              setAirports={setAirports}
            />
          );

        return (
          <Dot
            x={myX}
            y={myY}
            key={airport.id}
            airport={airport}
            airports={airports}
            setAirports={setAirports}
          />
        );
      })}
      <USAMap />
    </StyledMap>
  );
}
