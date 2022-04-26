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
`

const FinalContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
`

export default index