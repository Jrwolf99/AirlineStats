import React from "react";
import USAMap from "react-usa-map";
import styled from "styled-components";

import Dot from "./dot";

import myAirports from "../../data/USAirports.json";

import useProjection from "../../hooks/useProjection";
import Plane from "./Plane/plane";

const StyledMap = styled.div`
  position: relative;
  width: 1000px;
  margin: 0;
`;

//latitude and longitude of the US starts at 125
export default function MyMap({ airports, setAirports }) {
  const { albersCalculateXY, scaleXY } = useProjection();

  return (
    <StyledMap>
      {myAirports.map((airport) => {
        let [myX, myY] = albersCalculateXY(
          airport.longitude_deg,
          airport.latitude_deg
        );
        myX = scaleXY(myX, myY)[0];
        myY = scaleXY(myX, myY)[1];

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

      <Plane airports={airports} />
      <USAMap />
    </StyledMap>
  );
}
