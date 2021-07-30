import React from 'react';
import styled from 'styled-components';

const DailyPhoto = props => {
    const { photoData } = props;

    const StyledDiv = styled.div`
        background-color: grey;
        color: white;
        margin: auto;
        padding-bottom: 1rem;
        border: 10px inset darkgrey;
        width: 40%;
        height: 50%;
    `;

    const StyledImg = styled.img`
        width: 70%;
        height: 60%;
        // margin-left: 20%;
        border: 8px inset gold;
    `;

    const StyledH3 = styled.h3`
        // margin-left: 11%;
        font-size: 2.7em;
        font-family: 'Lucida Handwriting', cursive;
        // border: 5px solid aqua;
        margin-top: 10px;
    `;

    const StyledParagraphs = styled.div`
        font-family: 'Times New Roman', serif;
        font-size: 1.1rem;
        font-weight: 650;
        padding: 5px;
        // border: 5px solid black;
    `;

    const StyledFooter = styled.footer`
        font-family: 'Times New Roman', serif;
        font-weight: 560;
    `;
    
    if(!photoData) {
        return <h3>Loading...</h3>;
    }

    return (
        <StyledDiv>
            <StyledH3>{photoData.title}</StyledH3>
            <StyledImg src={photoData.url} alt="pic of the day" />
            <StyledParagraphs>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </StyledParagraphs> 
            <StyledFooter>Copyright <i>{photoData.copyright}</i></StyledFooter>
        </StyledDiv>
    )
}

export default DailyPhoto;