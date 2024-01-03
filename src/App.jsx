import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage.jsx';
import QuestionBox from './components/QuestionBox.jsx';
import Result from './components/Result.jsx';

function App() {

  // USING STATE TO RENDER THORUGH PAGES 
  const [currentPage, setCurrentPage] = useState('HomePage');
  const [userResponses, setUserResponses] = useState([]);

  const startQuiz = () => {
    setCurrentPage('QuestionBox');
  };

  const showResult = () => {
    setCurrentPage('Result');
  };

  const resetQuiz = () => {
    setCurrentPage('QuestionBox');
  };

  return (
    <>

      {currentPage === 'HomePage' && (
        <HomePage startQuiz={startQuiz} />
      )}

      {currentPage === 'QuestionBox' && (
        <QuestionBox showResult={showResult} resetQuiz={resetQuiz} userResponses={userResponses}
        setUserResponses={setUserResponses} />
      )}

      {currentPage === 'Result' && (
        <Result resetQuiz={resetQuiz} userResponses={userResponses}  />
      )}
    </>
  );
}

export default App;
