import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OffBulb from './Images/Off-Bulb.png'
import OnBulb from './Images/On-Bulb.png'

function App() {

  const Bulb = { OnBulb, OffBulb }
  const [img, SetImg] = useState(Bulb.OffBulb)
  const [btnName, setBtnName] = useState("On")

  const toggleButton = () => {
    let val = img;
    (val === OffBulb) ?
      SetImg(Bulb.OnBulb) : SetImg(Bulb.OffBulb)

    let btn = btnName;
    (btn === "Off") ?
      setBtnName("On") : setBtnName("Off")
  }

  //Change Body Background Color

  const [color , setColor] = useState("white")
  const [modeName , setModeName] = useState("Dark Mode")
  const modeChange = () =>{
    let bgColor = color;
    (bgColor === "white")?
    setColor("black"):setColor("white")

    let modeBtn = modeName ;
    (modeBtn === "Light Mode")?
    setModeName("Dark Mode"):setModeName("Light Mode")

  } 

  return (
    <div className="App" style={{backgroundColor : color}}> 
      <button className='modeBtn' onClick={modeChange} >
        {modeName}
      </button>
      <div className='Bulb'>
        <img src={img} alt="" width='400px' />
        <br />
        <br />
        <br />
        <button onClick={toggleButton}>{btnName}</button>

      </div>


    </div>
  );
}

export default App;
