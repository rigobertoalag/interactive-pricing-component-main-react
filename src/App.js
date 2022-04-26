import React from 'react';
// import { Counter } from './features/counter/Counter';
import styled from 'styled-components'
import pc from './images/pattern-circles.svg'
import Pricing from './components/Pricing'

function App() {
  return (
    <Main>
      <AppTitleContainer>
        <h1 style={{ color: 'hsl(227, 35%, 25%)' }}>Simple, traffic-based pricing</h1>
        <small style={{ color: 'hsl(225, 20%, 60%)', fontSize: 'medium' }}>Sign-up for our 30-day trial. No credit card required</small>
      </AppTitleContainer>
      <Pricing />
    </Main>
  );
}

const Main = styled.div`
background: hsl(230, 100%, 99%);
height: 100vh;
width: 100%
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Manrope', sans-serif;
`

const AppTitleContainer = styled.div`
height: 15%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
background-image: url(${pc});
background-repeat: no-repeat;
background-position: center;
background-size: auto;
`

export default App;
