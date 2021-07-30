import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import DailyPhoto from './components/DailyPhoto';


function App() {
  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => setPhotoData(response.data))
      .catch(error => console.log(error));
    }, [])

  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <h2>Welcome!</h2>
      <p>Enjoy it! Learn it!</p>
      <DailyPhoto photoData={photoData} />
    </div>
  );
}

export default App;
