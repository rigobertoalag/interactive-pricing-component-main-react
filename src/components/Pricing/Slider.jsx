import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

import "./style.css";
import { setPrice } from '../../features/prices/priceSlice'

const MAX = 25;

const SliderC = () => {
  const priceState = useSelector((state)=>state.price.price);
  const dispatch = useDispatch();

  const [value, setValue] = useState(priceState);

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / MAX}% 100%` };
  };
  
  return (
    <SliderContainer>
      <input
        type="range"
        min="1"
        max={MAX}
        onChange={(e) => [dispatch(setPrice((e.target.value))), setValue(e.target.value)] }
        style={getBackgroundSize()}
        value={value}
      />
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  margin: 3em 0; 
`;

export default SliderC;
