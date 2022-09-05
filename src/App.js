import { useEffect, useState } from "react";
import styled from "styled-components";
import MyMap from "./MyMap";
import MyDescBar from "./MyDescBar";
import useFuelCost from "./hooks/useFuelCost";

const StyledApp = styled.div`
  background-color: #2e2e2e;
  min-height: 100vh;

  & > section {
    display: flex;
    justify-content: center;
    align-items: start;
  }
`;

const StyledHeaderSection = styled.div`
  padding: 1em 0 0 1em;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const StyledMapSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimeSection = styled.div``;

const StyledTitle = styled.h1``;
const StyledSubTitle = styled.h2`
  font-size: 1rem;
`;

function App() {
  const [airports, setAirports] = useState([]);
  const [distance, setDistance] = useState();

  const { getFuelCost } = useFuelCost();

  useEffect(() => {
    console.log(airports);

    console.log(getFuelCost());
  }, [airports, getFuelCost]);

  return (
    <StyledApp>
      <StyledHeaderSection>
        <StyledTitle>Airline Stats</StyledTitle>
        <StyledSubTitle>An interactive airport map</StyledSubTitle>
      </StyledHeaderSection>
      <section>
        <StyledTimeSection>
          <MyDescBar
            airports={airports}
            setAirports={setAirports}
            distance={distance}
            setDistance={setDistance}
          />
        </StyledTimeSection>
        <StyledMapSection>
          <MyMap airports={airports} setAirports={setAirports} />
        </StyledMapSection>
      </section>
    </StyledApp>
  );
}

export default App;
