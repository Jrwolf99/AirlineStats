import React, { useState } from "react";

import { AiFillInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import Modal from "./Modal";

const StyledIcon = styled.button`
  font-size: 2rem;
`;

export default function MyGraphModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledIcon
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <AiFillInfoCircle />
      </StyledIcon>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}
