import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Prices = () => {
  const priceState = useSelector((state) => state.price.price);
  const discountState = useSelector((state) => state.price.discount);

  const [price, setPrice] = useState(priceState);
  const [ds, setDS] = useState(discountState);
  const [discount, setDiscount] = useState(12);

  useEffect(() => {
    setPrice(priceState);
    setDS(discountState);

    if (ds) {
      const dis = priceState * 0.25;
      const res = price - dis;
      setDiscount(res);
    } else {
      setPrice(priceState);
    }
  }, [priceState, discountState]);

  return (
    <PricesContainer>
      <MutedText>100K PAGEVIEWS</MutedText>
      <PriceContainer>
        <PriceText>${ds ? `${discount}` : `${price}.00`}</PriceText>
        <MutedText>/ month</MutedText>
      </PriceContainer>
    </PricesContainer>
  );
};

const PricesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 1em;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: "row";
  align-items: center;
  justify-content: end;
`;
const MutedText = styled.span`
  color: hsl(225, 20%, 60%);
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: small;
  }
`;
const PriceText = styled.span`
  color: hsl(227, 35%, 25%);
  font-size: xx-large;
  font-weight: 800;
  margin-right: 0.1em;

  @media (max-width: 425px) {
    font-size: x-large;
  }
`;

export default Prices;
