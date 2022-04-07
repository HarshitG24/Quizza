import "./css/QuestionCard.css";
import { optionLabels } from "../../Model/Helpers";
import { useState, useEffect } from "react";
import QuizOptions from "./QuizOptions";

function QuestionCard(props) {
  const { question, index } = props;

  const [currentOption, setCurrentOption] = useState(-1);
  const [optionsArray, setOptionsArray] = useState([]);

  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     let temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }

  //   return array;
  // }

  console.log(question);

  return (
    <div className="question-card">
      <div className="card">
        <p>Question {index + 1}</p>
        <p>{question.question}</p>
        <ul className="quiz-options">
          {question.allOptions.map((option, index) => {
            return (
              <div
                onClick={() => setCurrentOption(index)}
                className={
                  index === currentOption ? "option-row-selected" : "option-row"
                }
              >
                <label>{optionLabels[index]}</label>
                <li className="option-label">{option}</li>
              </div>
              // <QuizOptions
              //   option={option}
              //   index={index}
              //   // currentOption={currentOption}
              //   // setCurrentOption={setCurrentOption}
              // />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default QuestionCard;
