import React, { useState } from 'react';
import "./Questionbox.css";
import questions from '../questions.js';
import img from '../assets/bulb.png';

export default function QuestionBox({ showResult, resetQuiz, userResponses, setUserResponses }) {
  const [state, setstate] = useState({
    q: questions[0].text,
    op1: questions[0].options[0].text,
    op2: questions[0].options[1].text,
    op3: questions[0].options[2].text,
    op4: questions[0].options[3].text,
    qn: 1,
    ct: 0
  });

  const [colorState, setColor] = useState(true);
  const [textColor, setTextColor] = useState('white');

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

  const changeColor = () => {
    setTextColor('blue');
  }

  const removeHighlight = () => {
    setTextColor('white');
  }

  const handleUserResponse = (selectedOption) => {
    const { ct } = state;
    const isCorrect = questions[ct].options[selectedOption].isCorrect;

    setUserResponses((prevResponses) => [
      ...prevResponses,
      { questionIndex: ct, isCorrect },
    ]);

    nextque();
  };

  const nextque = () => {
    const { ct } = state;
    if (ct + 1 < questions.length) {
      setstate((prevState) => ({
        ...prevState,
        q: questions[ct + 1].text,
        op1: questions[ct + 1].options[0].text,
        op2: questions[ct + 1].options[1].text,
        op3: questions[ct + 1].options[2].text,
        op4: questions[ct + 1].options[3].text,
        ct: ct + 1,
        qn: prevState.qn + 1,
      }));
    }

    if (state.qn === 5) {
      showResult();
    }
  };

  return (
    <div className='container' style={themeStyle}>
      <div className='colorImg' onClick={handleToggle} style={themeStyle1}>
        <img src={img} alt="" />
        <p>{colorState ? 'Light' : 'Dark'}</p>
      </div>
      <h1>Quiz <span>App</span></h1>
      <div className='quesBox'>
        <h5>Question: {state.qn} out of 5</h5>
        <div>
          <h1 style={{ color: textColor }}>{state.q}</h1>
          <div className='flex'>
            <div>
              <button onClick={() => handleUserResponse(1)}>{state.op2}</button>
              <button onClick={() => handleUserResponse(0)}>{state.op1}</button>
            </div>
            <div>
              <button onClick={() => handleUserResponse(2)}>{state.op3}</button>
              <button onClick={() => handleUserResponse(3)}>{state.op4}</button>
            </div>
          </div>
          <div className='btns-style btn-flex'>
            <button onClick={changeColor}>Highlight</button>
            <button onClick={removeHighlight}>Remove Highlight</button>
          </div>
        </div>
      </div>
    </div>
  );
}
