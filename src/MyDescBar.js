import React, { useEffect } from "react";
import styled from "styled-components";
import useDistance from "./hooks/useDistance";

const StyledBar = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  gap: 10px;
`;

const StyledWhiteBox = styled.div`
  height: 50px;
  padding: 2em;
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
  flex-direction: row;
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
      <StyledWhiteBox>
        <StyledAirports>
          {airports.length > 0
            ? airports.map((airport) => {
                return (
                  <StyledAirport>
                    <h1>{airport.iata_code}</h1>
                    <p>{airport.municipality}</p>
                  </StyledAirport>
                );
              })
            : "Click a blue button!"}
        </StyledAirports>
      </StyledWhiteBox>
      <StyledWhiteBox>
        <StyledDistance>
          <strong>Distance</strong>
          <p>{Math.floor(distance)} miles</p>
        </StyledDistance>
      </StyledWhiteBox>

      <StyledWhiteBox
        onClick={() => {
          setDistance(0);
          setAirports([]);
        }}
        style={{ cursor: "pointer" }}
      >
        Clear
      </StyledWhiteBox>
    </StyledBar>
  );
}
