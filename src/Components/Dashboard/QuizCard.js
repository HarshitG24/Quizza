import "./css/QuizCard.css";
import AnswerTable from "../Results/AnswerTable";

function QuizCard(props) {
  const { quiz } = props;
  console.log("the quiz is", JSON.parse(quiz.quizData.answerSummary));
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
