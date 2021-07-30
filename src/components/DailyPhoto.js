import React from 'react';

const DailyPhoto = props => {
    const { photoData } = props;
    
    if(!photoData) {
        return <h3>Loading...</h3>;
    }

    return (
        <div className='daily-photo'>
            <h3>{photoData.title}</h3>
            <img src={photoData.url} alt="pic of the day" />
            <p>{photoData.date}</p>
            <p>{photoData.explanation}</p>
            <footer>Copyright {photoData.copyright}</footer>
        </div>
    )
}

export default DailyPhoto;