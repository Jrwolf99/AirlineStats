import React from "react";
import USAMap from "react-usa-map";
import styled from "styled-components";

const StyledMap = styled.div`
  path {
    pointer-events: all;
  }
  path:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export default function MyMap() {
  return (
    <StyledMap>
      <USAMap />
    </StyledMap>
  );
}
