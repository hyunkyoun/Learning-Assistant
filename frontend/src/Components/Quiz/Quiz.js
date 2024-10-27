import React, { useState } from 'react';
import './Quiz.css';
import { questions } from '../../assets/questions';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale
)

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(questions[index]);
    let [result, setResult] = useState(false);

    let previousElement = null;
    let answer = "";

    let [visual, setVisual] = useState(0);
    let [auditory, setAuditory] = useState(0);
    let [readingwriting, setReadingwriting] = useState(0);
    let [kinesthetic, setKinesthetic] = useState(0);

    const navigate = useNavigate();

    const getAnswer = (e, ans) => {
        if (answer !== ans) {
            if (previousElement !== null) {
                previousElement.target.classList.remove("chosen");
            }
            e.target.classList.add("chosen");
            previousElement = e;
            answer = ans;
        }
    }

    const next = () => {
        if (answer !== "") {
            if (index === questions.length - 1) {
                setResult(true);

                setVisual((visual / questions.length) * 100)
                setAuditory((auditory / questions.length) * 100)
                setReadingwriting((readingwriting / questions.length) * 100)
                setKinesthetic((kinesthetic / questions.length) * 100)

                return;
            }
            
            setIndex(++index);
            setQuestion(questions[index]);
            
            if (answer === "option1") {
                setVisual(++visual);
            }
            else if (answer === "option2") {
                setAuditory(++auditory)
            }
            else if (answer === "option3") {
                setReadingwriting(++readingwriting);
            }
            else if (answer === "option4") {
                setKinesthetic(++kinesthetic);
            }

            answer = "";

            previousElement.target.classList.remove("chosen");
            previousElement = null;
        }
    };

    const data = {
        labels: [
            'Visual',
            'Auditory',
            'Reading/Writing',
            'Kinesthetic',
        ],
        datasets: [{
          label: 'You',
          data: [visual, auditory, readingwriting, kinesthetic],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    };

    const reset = () => {
        setIndex(0);
        setQuestion(questions[index]);
        setResult(false);
        previousElement = null;
        answer = "";
        setVisual(0);
        setAuditory(0);
        setReadingwriting(0);
        setKinesthetic(0);
    };

    const continueToHome = () => {
        navigate("/Home");
    };

    return (
        <div className='container'>
            <h1>Quiz</h1>
            <hr />
            {result ? 
                <>
                    <h2>Result:</h2>
                    <div>
                        <Radar data={data} />
                    </div>
                    <h3>What type of student are you?</h3>

                    <div className='results-container'>    

                        <div className='results-box'>
                            <h3 className='results-text'>Visual</h3>
                            <p className='results-text'>You are <span className='percentage'>{Math.round(visual)}%</span> a visual learner</p>
                        </div>
                        <div className='results-box'>
                            <h3 className='results-text'>Auditory</h3>
                            <p className='results-text'>You are <span className='percentage'>{Math.round(auditory)}%</span> an auditory learner</p>
                        </div>
                        <div className='results-box'>
                            <h3 className='results-text'>Reading / Writing</h3>
                            <p className='results-text'>You are <span className='percentage'>{Math.round(readingwriting)}%</span> a reading and writing learner</p>
                        </div>
                        <div className='results-box'>
                            <h3 className='results-text'>Kinesthetic</h3>
                            <p className='results-text'>You are <span className='percentage'>{Math.round(kinesthetic)}%</span> a kinesthetic learner</p>
                        </div>

                    </div>

                    <div className='results-button-container'>
                        <button onClick={continueToHome}>Start</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </> 
                : 
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li onClick={(e) => {getAnswer(e, "option1")}}>{question.option1}</li>
                        <li onClick={(e) => {getAnswer(e, "option2")}}>{question.option2}</li>
                        <li onClick={(e) => {getAnswer(e, "option3")}}>{question.option3}</li>
                        <li onClick={(e) => {getAnswer(e, "option4")}}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className='index'>{index + 1} of {questions.length} questions</div>
                </>
            }
            
        </div>
        
    )
}

export default Quiz