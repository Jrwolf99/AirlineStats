import styled from "styled-components";
import MyMap from "./MyMap";

const StyledApp = styled.div`
  background-color: #2e2e2e;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <MyMap />
    </StyledApp>
  );
}

export default App;
