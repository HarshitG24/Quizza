import "./css/QuestionCard.css";
import { optionLabels } from "../../Model/Helpers";

function QuestionCard(props) {
  const { question, index } = props;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  return (
    <div className="question-card">
      <div className="card">
        <p>Question {index + 1}</p>
        <p>{question.question}</p>
        <ul className="quiz-options">
          {shuffleArray([
            ...question.incorrectAnswers,
            question.correctAnswer,
          ]).map((option, index) => {
            return (
              <div className="option-row">
                <label>{optionLabels[index]}</label>
                <li className="option-label">{option}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default QuestionCard;
