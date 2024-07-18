import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'
function App() {

  const [disOption, setDisOption] = useState(false)
  // const [showFilter, setShowFilter] = useState(false)
  const [logedIn, setLogedin] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [inputVal, setInputVal] = useState('')


  return (
    <>
      <Header disOption={disOption} setDisOption={setDisOption} cardData={cardData} setCardData={setCardData} setInputVal={setInputVal} logedIn={logedIn} setLogedin={setLogedin} />
      <Outlet context={[disOption, setDisOption, logedIn, setLogedin, cardData, setCardData, inputVal, setInputVal]} />
      <Footer />
    </>
  )
}

export default App
