import { useEffect, useState } from "react";
import styled from "styled-components";
import MyMap from "./MyMap";
import MyDescBar from "./MyDescBar";

const StyledApp = styled.div`
  background-color: #2e2e2e;

  height: 100vh;
`;

const StyledHeaderSection = styled.div`
  padding: 2em;
  color: white;
`;

const StyledMapSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1``;
const StyledSubTitle = styled.h2`
  font-size: 1rem;
`;

function App() {
  const [airports, setAirports] = useState([]);
  const [distance, setDistance] = useState();
  useEffect(() => {
    console.log(airports);
  }, [airports]);

  return (
    <StyledApp>
      <StyledHeaderSection>
        <StyledTitle>Airline Stats</StyledTitle>
        <StyledSubTitle>An interactive airport map</StyledSubTitle>
      </StyledHeaderSection>
      <StyledMapSection>
        <MyMap airports={airports} setAirports={setAirports} />
      </StyledMapSection>

      <StyledTimeSection>
        <MyDescBar
          airports={airports}
          setAirports={setAirports}
          distance={distance}
          setDistance={setDistance}
        />
      </StyledTimeSection>
    </StyledApp>
  );
}

export default App;
