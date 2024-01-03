import React from 'react';
import  { useState } from 'react';
import "./Homepage.css";
import img from '../assets/bulb.png';

function HomePage({ startQuiz }) {

  // CHANGING THE BACKGROUND COLOR WHEN THE DARK OR LIGHT BUTTON IS CLICKED
  const [colorState, setColor] = useState(true);
  const handleToggle = () => {
    setColor((prevColorState) => !prevColorState);
  };
  const themeStyle = {
    backgroundColor: colorState ? "black" : "white",
    color: colorState ? "white" : "black",
  };
  const themeStyle1 = {
    backgroundColor: colorState ? "white" : "black",
    color: colorState ? "black" : "white",
  };


  return (
    <div className='text' style={themeStyle}>
      <div className='colorImg' onClick={handleToggle} style={themeStyle1}>
        <img src={img} alt="" />
        <p>{colorState ? 'Light' : 'Dark'}</p>
      </div>
      <h1>Quiz <span>App</span></h1>
      <h4>Take the Ultimate <br /> <span>Kalvium Quiz Challenge...</span></h4>
      <button onClick={startQuiz}>Start the Quiz</button>
      <h5>Beat the high score and become the <br /> <span>The Quiz Guru.</span> </h5>
    </div>
  );
}

export default HomePage;
