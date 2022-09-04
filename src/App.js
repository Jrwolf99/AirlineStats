import styled from "styled-components";
import MyMap from "./MyMap";

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

const StyledTitle = styled.h1``;
const StyledSubTitle = styled.h2`
  font-size: 1rem;
`;

function App() {
  return (
    <StyledApp>
      <StyledHeaderSection>
        <StyledTitle>Airline Stats</StyledTitle>
        <StyledSubTitle>
          An interactive map to see flights soar through the skies
        </StyledSubTitle>
      </StyledHeaderSection>

      <StyledMapSection>
        <MyMap />
      </StyledMapSection>
    </StyledApp>
  );
}

export default App;
