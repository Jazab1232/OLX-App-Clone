import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [disOption, setDisOption] = useState(false);
  const [logedIn, setLogedin] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <>
      <Header
        disOption={disOption}
        setDisOption={setDisOption}
        cardData={cardData}
        setCardData={setCardData}
        setInputVal={setInputVal}
        logedIn={logedIn}
        setLogedin={setLogedin}
      />
      <Outlet context={[disOption, setDisOption, logedIn, setLogedin, cardData, setCardData, inputVal, setInputVal, isFavorited, setIsFavorited]} />
      <Footer />
    </>
  );
}

export default App;
