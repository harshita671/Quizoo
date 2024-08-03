import { useState } from 'react';
import QUESTIONS from '../question';

import quizCompletedImg from '../asserts/quiz-complete.png';
export default function Quiz(){
    const [userAnswers, setUserAnswers]= useState([]);
    const activeQuestiinIndex = userAnswers.length;
    const quizIsComplete = activeQuestiinIndex == QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers) =>{
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    if(quizIsComplete){
        return(
            <div id="summary">
                <img 
                src={quizCompletedImg}
                alt="Trophy Icon"
                />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestiinIndex].answers];
    shuffledAnswers.sort(() => Math.random() -0.5);
    return(
        <div id="question">
        <h2>{QUESTIONS[activeQuestiinIndex].text}</h2>
        <ul id="answers">
            {shuffledAnswers.map((answer) =>(
                <li key={answer} className='answer'>
                    <button onClick={() => handleSelectAnswer(answer)}>
                        {answer}
                        </button>
                </li>
            ))}
        </ul>
        </div>
    )
}