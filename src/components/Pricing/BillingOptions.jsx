import React, { useState } from 'react'
import styled from 'styled-components'
import Switch from '@mui/material/Switch';

import { setDiscount } from '../../features/prices/priceSlice';
import { useDispatch, useSelector } from 'react-redux';

const BillingOptions = () => {
  const discount = useSelector((state) => state.price.discount)
  const dispatch = useDispatch()

  const [checked, setChecked] = useState(discount)

  const handleCheck = (e) =>{
    setChecked(e.target.checked)
    dispatch(setDiscount(e.target.checked))
  }

  return (
    <BOContainer>
      <BOText>Monthly Billing</BOText>
      <Switch checked={checked} onChange={handleCheck}/>
      <BOText>Yearly Billing</BOText>
      <Badge>25% discount</Badge>
    </BOContainer>
  )
}

const BOContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: end;
margin: 2em 0;
`
const BOText = styled.span`
color: hsl(225, 20%, 60%);
margin: 0 1em;
`
const Badge = styled.span`
background-color: hsl(14, 92%, 95%);
color: hsl(15, 100%, 70%);
padding: 0.2em 0.5em;
border-radius: 1em;
font-size: x-small;
height: 1.5em;
/* width: 100%; */
`
export default BillingOptions