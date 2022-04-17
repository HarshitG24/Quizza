import "./css/QuizCard.css";
import AnswerTable from "../Results/AnswerTable";

/**
 * Component for showing the individual card of the quizzes taken by the user.
 * @component
 * @param {Object} Props - An object.
 * @param {Object} props.quiz - Object to store the data of the quizzes taken by user.
 * @param {string} props.quiz.selectedCategory - Contains the category of the quiz taken
 * @param {Object} props.quiz.quizData - Object that contains quizData such as answers, data/Time and score
 * @param {string} props.quiz.quizData.dateTime - Contains the date at which user took the quiz
 * @param {Object} props.quiz.quizData.answerSummary - Contains the collection of question number, user answer and correct answer
 * @param {string} props.quiz.quizData.currentScore - Contains the scores obtained by user in thar quiz.
 */

function QuizCard(props) {
  const { quiz } = props;
  return (
    <div className="quiz-card">
      <div>
        <div className="group0">
          <p className="quiz-category">{quiz.selectedCategory}</p>
        </div>
        <div className="quiz-date">
          <p className="quiz-date-txt">Quiz Taken On: </p>
          <p>{quiz.quizData.dateTime}</p>
        </div>
        <div className="group1">
          <div className="group1-1">
            <AnswerTable ansSummary={JSON.parse(quiz.quizData.answerSummary)} />
          </div>
          <div className="group1-2">
            <span className="circle">
              <p className="marks">{quiz.quizData.currentScore}/5</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
