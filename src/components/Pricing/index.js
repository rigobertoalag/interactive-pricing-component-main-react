import React from 'react'
import styled from 'styled-components'


import Prices from './Prices'
import SliderC from './Slider'
import BillingOptions from './BillingOptions'
import PerksList from './PerksList'
import SubmitButton from './SubmitButton'

const index = () => {

    return (
        <PricingContainer>
            <Prices />
            <SliderC />
            <BillingOptions />
            <FinalContainer>
                <PerksList />
                <SubmitButton />
            </FinalContainer>
        </PricingContainer>
    )
}

const PricingContainer = styled.div`
width: 30%;
box-shadow: 1px 1px 15px gray;
border-radius: 1em;
margin-top: 3em;
padding: 2em;

@media(max-width: 425px){
    width: 70%;
    margin-top: 3em;
    padding: 2em;
    box-shadow: 1px 1px 5px gray;
}
`

const FinalContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;

@media(max-width: 425px){
    grid-template-columns: 1fr;
    align-items: center;
    gap: 1em;
}
`

export default index