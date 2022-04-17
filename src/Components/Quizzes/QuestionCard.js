import "./css/QuestionCard.css";
import QuizOptions from "./QuizOptions";

/**
 * Component for UI of the questions, the card which contains questions and options
 * @component
 * @param {Object} Props - An object.
 * @param {string} props.question - Contains the question to be displayed.
 * @param {string} props.index - Contains the current question number
 * @param {number} props.currentOption - Contains the option selected by the user for the question
 * @param {Function} props.setCurrentOption - To set the option in the variable currentOption, as selected by the user.
 */

function QuestionCard(props) {
  const { question, index, currentOption, setCurrentOption } = props;
  return (
    <div className="question-card">
      <div className="card">
        <p id="question-number">Question {index + 1}</p>
        <p>{question.question}</p>
        <ul className="quiz-options">
          <QuizOptions
            options={question.allOptions}
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
          />
        </ul>
      </div>
    </div>
  );
}

export default QuestionCard;
