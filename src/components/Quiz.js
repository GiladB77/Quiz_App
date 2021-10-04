import React, { useState, useContext } from 'react'
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {

    const { score, setScore, setGameState } = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
    };


    const finishQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    }


    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button className="clickOn" onClick={() => setOptionChosen("A")}>
                    {Questions[currQuestion].A}
                </button>
                <button className="clickOn" onClick={() => setOptionChosen("B")}>
                    {Questions[currQuestion].B}
                </button>
                <button className="clickOn" onClick={() => setOptionChosen("C")}>
                    {Questions[currQuestion].C}
                </button>
                <button className="clickOn" onClick={() => setOptionChosen("D")}>
                    {Questions[currQuestion].D}
                </button>
            </div>
            {currQuestion === Questions.length - 1 ? (
                <button onClick={finishQuestion}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}>Next Question</button>

            )}
        </div>
    )
}

export default Quiz
