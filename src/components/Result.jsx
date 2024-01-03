import React, { useState, useEffect } from 'react';
import "./result.css";
import img from '../assets/bulb.png';
import questions from '../questions'; 

export default function Result({ resetQuiz, userResponses }) {
  const [uniqueUserResponses, setUniqueUserResponses] = useState([]);

  useEffect(() => {
    // Remove duplicates based on questionIndex
    const uniqueResponses = userResponses.reduce((acc, current) => {
      const existingIndex = acc.findIndex(item => item.questionIndex === current.questionIndex);

      if (existingIndex !== -1) {
        acc[existingIndex] = current;
      } else {
        acc.push(current);
      }

      return acc;
    }, []);

    setUniqueUserResponses(uniqueResponses);
  }, [userResponses]);

  const calculateResult = () => {
    const correctAnswers = uniqueUserResponses.filter(response => response.isCorrect).length;
    const percentage = (correctAnswers / questions.length) * 100;
    return { correctAnswers, percentage };
  };
  const result = calculateResult();


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
    <div className='main' style={themeStyle}>
      <div className='colorImg' onClick={handleToggle} style={themeStyle1}>
        <img src={img} alt="" />
        <p>{colorState ? 'Light' : 'Dark'}</p>
      </div>
      <h1>Quiz <span>App</span></h1>
      <div className='result'>
        <h2>Final Results</h2>
        <h5>{result.correctAnswers} out of {questions.length} correct - ({result.percentage}%)</h5>
        <button onClick={resetQuiz}>Restart game</button>
      </div>
    </div>
  );
}
