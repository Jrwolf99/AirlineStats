import React from "react";
import USAMap from "react-usa-map";
import styled from "styled-components";

import Dot from "./components/dot";

import myAirports from "./data/USAirports.json";

import useProjection from "./utility/useProjection";

const StyledMap = styled.div`
  position: relative;

  width: 1000px;
  margin: 0;

  path {
    pointer-events: all;
  }
  path:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

//latitude and longitude of the US starts at 125
export default function MyMap() {
  const { albersCalculateXY } = useProjection();
  const scale = 1250;
  const shiftX = 494;
  const shiftY = 291;

  console.log("long0 and lat0 x and y: ", albersCalculateXY(-95.02, 38.16));

  const centX = albersCalculateXY(-95.02, 38.16)[0] * scale + shiftX;
  const centY = albersCalculateXY(-95.02, 38.16)[1] * scale + shiftY;

  return (
    <StyledMap>
      {myAirports.map((airport) => {
        let [myX, myY] = albersCalculateXY(
          airport.longitude_deg,
          airport.latitude_deg
        );
        myX = myX * scale + shiftX;
        myY = myY * scale + shiftY;

        if (airport.iso_region == "US-HI")
          return <Dot x={276} y={60} key={airport.id} />;
        if (
          airport.iso_region == "US-AK" &&
          airport.municipality == "Anchorage"
        )
          return <Dot x={120} y={62} key={airport.id} />;

        if (
          airport.iso_region == "US-AK" &&
          airport.municipality == "Fairbanks"
        )
          return <Dot x={130} y={90} key={airport.id} />;

        return <Dot x={myX} y={myY} key={airport.id} />;
      })}
      <USAMap />
    </StyledMap>
  );
}
