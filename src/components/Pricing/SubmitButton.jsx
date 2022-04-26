import React from "react";
import styled from "styled-components";

const SubmitButton = () => {
  return (
    <BtnContainer>
      <BtnSubmit>
        <p>Start My Trial</p>
      </BtnSubmit>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const BtnSubmit = styled.div`
  background-color: hsl(227, 35%, 25%);
  /* padding: 2em; */
  color: hsl(223, 50%, 87%);
  height: 50%;
  width: 70%;
  border-radius: 2em;
  border: none;
  cursor: pointer;
  text-align: center;
  &:hover{
    color: white;
  }
`;

export default SubmitButton;
