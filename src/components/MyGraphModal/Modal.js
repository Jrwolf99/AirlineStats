import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

import graph from "../../data/Graph.png";

const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(70, 70, 70, 0.7);
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWhiteBox = styled.div`
  height: 80vh;
  width: 80vw;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  color: black;
  overflow-y: auto;

  & > * {
    padding: 2em;
  }
`;

const StyledHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & > button {
    font-size: 2rem;
    position: sticky;
  }
`;

const StyledBody = styled.section`
  & > img {
    padding: 2em;
    max-height: 500px;
  }
  & > p {
    font-size: 0.9rem;
  }
`;

const StyledFooter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export default function Modal({ setIsOpen }) {
  return (
    <StyledModal>
      <StyledWhiteBox>
        <StyledHeader>
          <h1>Welcome to Airplane Stats!</h1>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CgClose />
          </button>
        </StyledHeader>
        <StyledBody>
          <h3>Overview</h3>
          <br />
          <p>
            This is a program designed to display airline and flight data in a
            visual way.
          </p>
          <br />
          <p>
            Here, we are analyzing a Boeing 737-800's flight time, distance, and
            fuel cost that it takes to fly from one airport to the next.
          </p>
          <br />
          <p>
            These calculations were based on an assumption that flight journey
            is split into three categories: takeoff, cruising, and landing.{" "}
          </p>
          <p>
            It is important to note that the time calculations and fuel
            consumption calculations are all based on these three assumed stages
            of flight journey.
          </p>

          <br />
          <br />
          <h3>Jet Fuel Prices over Time</h3>

          <img
            alt="A graph displaying the data of jet fuel prices over the last two decades. "
            src={graph}
          ></img>
        </StyledBody>

        <StyledFooter>
          <p>&lt;/&gt; with ♥ by Jonathan Wolf</p>
        </StyledFooter>
      </StyledWhiteBox>
    </StyledModal>
  );
}
