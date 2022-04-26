import React from "react";
import styled from "styled-components";

import check from "../../images/icon-check.svg";

const PerksList = () => {
  return (
    <PLContainer>
      <PLLabel>
        <PLCheck />
        <PLText>Unlimited websites</PLText>
      </PLLabel>
      <PLLabel>
        <PLCheck />
        <PLText>100% data ownership</PLText>
      </PLLabel>
      <PLLabel>
        <PLCheck />
        <PLText>Email reports</PLText>
      </PLLabel>
    </PLContainer>
  );
};

const PLContainer = styled.div`
`;

const PLLabel = styled.span`
  display: flex;
  flex-direction: row;
`;

const PLCheck = styled.div`
  background-image: url(${check});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  width: 1em;
  margin-right: 1em;
`;

const PLText = styled.p`
color: hsl(225, 20%, 60%);
margin: 0.5em 0;
`

export default PerksList;
