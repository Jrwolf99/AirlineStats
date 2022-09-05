import React, { useEffect } from "react";
import styled from "styled-components";
import useDistance from "./hooks/useDistance";

import { IoIosAirplane } from "react-icons/io";

const StyledBar = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin: 3rem;
  gap: 50px;
`;

const StyledTrack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledWhiteBox = styled.div`
  padding: 1em;
  background-color: white;
  border-radius: 3px;
  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledAirports = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 20px;
`;

const StyledAirport = styled.div`
  padding: 1em;

  & > h1 {
    font-size: 1rem;
  }

  & > p {
    font-size: 0.7rem;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const StyledDistance = styled.div``;

export default function MyDescBar({
  airports,
  setAirports,
  distance,
  setDistance,
}) {
  const { findDistanceMiles } = useDistance();

  useEffect(() => {
    let totalDistance = 0;
    for (let i = 0; i < airports.length; i++) {
      if (airports[i - 1]) {
        totalDistance += findDistanceMiles(
          [airports[i].longitude_deg, airports[i].latitude_deg],
          [airports[i - 1].longitude_deg, airports[i - 1].latitude_deg]
        );
      }
    }

    setDistance(totalDistance);
  }, [airports, findDistanceMiles, setDistance]);

  return (
    <StyledBar>
      <StyledTrack>
        <StyledWhiteBox
          onClick={() => {
            setDistance(0);
            setAirports([]);
          }}
          style={{ cursor: "pointer", padding: "1em" }}
        >
          Clear
        </StyledWhiteBox>
        <StyledWhiteBox>
          <StyledAirports>
            {airports.length > 0
              ? airports.map((airport) => {
                  return (
                    <StyledAirport>
                      <div>
                        <IoIosAirplane />
                        <h1> {airport.iata_code}</h1>
                      </div>
                      <p>{airport.municipality}</p>
                    </StyledAirport>
                  );
                })
              : "Click a blue button!"}
          </StyledAirports>
        </StyledWhiteBox>
      </StyledTrack>

      <StyledWhiteBox>
        <StyledDistance>
          <strong>Total Distance</strong>
          <p>{Math.floor(distance)} miles</p>
        </StyledDistance>
      </StyledWhiteBox>
    </StyledBar>
  );
}
