import React, { useEffect } from "react";
import styled from "styled-components";
import useDistance from "./hooks/useDistance";

import { IoIosAirplane } from "react-icons/io";

import planes from "./data/planes.json";
import useFuelCost from "./hooks/useFuelCost";
import useCalculate from "./hooks/useCalculate";

const StyledBar = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin: 1.2rem;
  gap: 20px;
`;

const StyledTrackOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledTrackTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > * {
    width: 200px;
  }
`;

const StyledWhiteBox = styled.div`
  padding: 0.5em;
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
  width: 100px;
  gap: 20px;
`;

const StyledAirport = styled.div`
  padding: 0.3em;

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
const StyledCosts = styled.div`
  & > p {
    font-size: 0.8rem;
  }
`;

const StyledBlueLetters = styled.span`
  color: #0059ff;
  font-weight: 500;
`;

export default function MyDescBar({
  airports,
  setAirports,
  distance,
  setDistance,
  date,
}) {
  const { findTotalDistance } = useDistance();
  const { getFuelCost } = useFuelCost();
  const { calculateTotalFlightTime, calculateTotalFuelCosts } = useCalculate();

  useEffect(() => {
    setDistance(findTotalDistance(airports));
  }, [setDistance, findTotalDistance, airports]);

  return (
    <StyledBar>
      <StyledTrackOne>
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
                    <StyledAirport key={airport.id}>
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
      </StyledTrackOne>

      <StyledTrackTwo>
        <StyledWhiteBox>
          <StyledCosts>
            <strong>Total Cost of Jet Fuel</strong>
            <p style={{ fontSize: "1.5rem" }}>
              <StyledBlueLetters>
                $
                {calculateTotalFuelCosts(
                  distance,
                  getFuelCost(date.month, date.year)
                )}
              </StyledBlueLetters>{" "}
            </p>
          </StyledCosts>
        </StyledWhiteBox>

        <StyledWhiteBox>
          <StyledCosts>
            <strong>
              {date.month} {date.year} Cost
            </strong>
            <p>
              <StyledBlueLetters>
                ${getFuelCost(date.month, date.year)}
              </StyledBlueLetters>{" "}
              Per Gallon
            </p>
          </StyledCosts>
        </StyledWhiteBox>

        <StyledWhiteBox>
          <StyledDistance>
            <strong>Total Distance</strong>
            <p>{Math.floor(distance).toLocaleString()} miles</p>
          </StyledDistance>
        </StyledWhiteBox>

        <StyledWhiteBox>
          <StyledCosts>
            <strong>Flight Speeds</strong>
            <p>
              takeoff:{" "}
              <StyledBlueLetters>
                {planes.Boeing737800.takeoff.speed}
              </StyledBlueLetters>{" "}
              MPH
            </p>
            <p>
              cruising:{" "}
              <StyledBlueLetters>
                {planes.Boeing737800.cruising.speed}
              </StyledBlueLetters>{" "}
              MPH
            </p>
            <p>
              landing:{" "}
              <StyledBlueLetters>
                {planes.Boeing737800.landing.speed}
              </StyledBlueLetters>{" "}
              MPH
            </p>
          </StyledCosts>
        </StyledWhiteBox>

        <StyledWhiteBox>
          <StyledDistance>
            <strong>Total Flight Time</strong>
            <p>
              <StyledBlueLetters>
                {calculateTotalFlightTime(
                  distance,
                  planes.Boeing737800.takeoff.speed,
                  planes.Boeing737800.cruising.speed,
                  planes.Boeing737800.landing.speed
                ) + " "}
              </StyledBlueLetters>
            </p>
          </StyledDistance>
        </StyledWhiteBox>

        <StyledWhiteBox>
          <StyledCosts>
            <strong>Jet Fuel Used</strong>
            <p>
              takeoff:{" "}
              <StyledBlueLetters>
                {planes.Boeing737800.takeoff.fuelConsumption.toLocaleString()}
              </StyledBlueLetters>{" "}
              Gallons/Hr
            </p>

            <p>
              cruising:{" "}
              <StyledBlueLetters>
                {planes.Boeing737800.cruising.fuelConsumption}
              </StyledBlueLetters>{" "}
              Gallons/Hr
            </p>

            <p>
              landing:{" "}
              <StyledBlueLetters>
                {planes.Boeing737800.landing.fuelConsumption}
              </StyledBlueLetters>{" "}
              Gallons/Hr
            </p>
          </StyledCosts>
        </StyledWhiteBox>
      </StyledTrackTwo>
    </StyledBar>
  );
}
