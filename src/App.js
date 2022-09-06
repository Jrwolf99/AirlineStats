import { useState } from "react";
import styled from "styled-components";
import MyMap from "./components/MyMap/MyMap";
import MyDescBar from "./components/MyDescBar/MyDescBar";
import MyDatePicker from "./components/MyDatePicker/MyDatePicker";
import MyGraphModal from "./components/MyGraphModal/MyGraphModal";

const StyledApp = styled.div`
  background-color: #2e2e2e;
  min-height: 100vh;

  & > section {
    display: flex;
    justify-content: center;
    align-items: start;
  }

  & > * {
    @media (max-width: 1300px) {
      transform: scale(0.8);
    }
  }
`;
const StyledHeaderSection = styled.div`
  padding: 1em 0 0 1em;
  color: white;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 48vw;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
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

  const [date, setDate] = useState({ month: "July", year: "2022" });

  return (
    <StyledApp>
      <StyledHeaderSection>
        <div>
          <StyledTitle>Airplane Stats</StyledTitle>
          <StyledSubTitle>An interactive airplane map</StyledSubTitle>
        </div>
        <span>
          <MyGraphModal />
          <MyDatePicker date={date} setDate={setDate} />
        </span>
      </StyledHeaderSection>
      <section>
        <StyledTimeSection>
          <MyDescBar
            airports={airports}
            setAirports={setAirports}
            distance={distance}
            setDistance={setDistance}
            date={date}
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
