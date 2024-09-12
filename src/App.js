import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import DailyPhoto from './components/DailyPhoto';
import styled from 'styled-components';

function App() {
  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => setPhotoData(response.data))
      .catch(error => console.log(error));
    }, [])
  
  const StyledAppDiv = styled.div`
    color: white;
    text-align: center;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
  ` 
  const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-evenly;
  `;

  const StyledH1 = styled.h1`
    font-size: 3.2em;
    text-transform: uppercase;
    font-family: 'Copperplate', fantasy;
  `;

  const StyledH2 = styled.h2`
    font-size: 2rem;
    font-family: 'Garamond', serif;
    margin-top: 0.1rem;
    text-transform: uppercase;
  `;

  const StyledP = styled.p`
    font-size: 2.5em;
    font-style: italic;
    font-family: 'Brush Script MT', cursive;
    margin-top: 0.1rem;
  `;

  return (
    <StyledAppDiv>
      <FlexContainer>
        <StyledH1>Nasa Photo of the Day</StyledH1>
        <StyledH2>Welcome!</StyledH2>
        <StyledP>Enjoy it! Learn it!</StyledP>
      </FlexContainer>
      <DailyPhoto photoData={photoData} />
    </StyledAppDiv>
  );
}

export default App;
