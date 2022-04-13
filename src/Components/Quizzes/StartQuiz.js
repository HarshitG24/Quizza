import {
  sportsLeisure,
  societyCulture,
  science,
  music,
  history,
  geography,
  generalKnowledge,
  foodDrink,
  filmTv,
  artsLiterature,
} from "../../Quiz Questions/Data";
import QuestionCard from "./QuestionCard";
import { useState, useEffect } from "react";
import "./css/StartQuiz.css";
import { useNavigate } from "react-router-dom";
import { addToDb, findAndRemove } from "../../Model/Mininmongo";
import { shuffle } from "../../Model/HelperFunctions";

function StartQuiz(props) {
  const { selectedCategory } = props;
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOption, setCurrentOption] = useState(-1);
  const [currentScore, setCurrentScore] = useState(0);
  const [answerSummary, setAnswerSummary] = useState([]);
  const [questionBank, setQuestionBank] = useState([]);

  function findMyCategory(selectedCategory) {
    let quesArr = [];
    switch (selectedCategory) {
      case "Sports & Leisure":
        quesArr = sportsLeisure;
        break;
      case "Society & Culture":
        quesArr = societyCulture;
        break;
      case "Science":
        quesArr = science;
        break;
      case "Music":
        quesArr = music;
        break;
      case "History":
        quesArr = history;
        break;
      case "Geography":
        quesArr = geography;
        break;
      case "General knowledge":
        quesArr = generalKnowledge;
        break;
      case "Food & Drink":
        quesArr = foodDrink;
        break;
      case "Film & TV":
        quesArr = filmTv;
        break;
      case "Arts & Literature":
        quesArr = artsLiterature;
        break;
      default:
        quesArr = [];
        break;
    }
    return quesArr;
  }

  // let ques = findMyCategory(selectedCategory)[currentQuestion];

  function setScore() {
    let userAnswer = questionBank[currentQuestion]?.allOptions[currentOption];
    if (questionBank[currentQuestion].correctAnswer === userAnswer) {
      setCurrentScore(currentScore + 1);
      return currentScore + 1;
    }

    return currentScore;
  }

  useEffect(() => {
    let questions = findMyCategory(selectedCategory);
    let randomlyPickedQuestions = shuffle(questions).slice(0, 5);
    console.log("picked questions", randomlyPickedQuestions);
    setQuestionBank(randomlyPickedQuestions);
  }, []);

  function convertNumberToAlphabet(num) {
    switch (num) {
      case 1:
        return "A";
      case 2:
        return "B";
      case 3:
        return "C";
      case 4:
        return "D";
      default:
        return "";
    }
  }

  async function nextBtnClicked() {
    let arr = [
      ...answerSummary,
      {
        question: currentQuestion + 1,
        correctAnswer: convertNumberToAlphabet(
          questionBank[currentQuestion].allOptions.findIndex(
            (e) => e === questionBank[currentQuestion].correctAnswer
          ) + 1
        ),
        userAnswer: convertNumberToAlphabet(
          questionBank[currentQuestion].allOptions.findIndex(
            (e) =>
              e === questionBank[currentQuestion]?.allOptions[currentOption]
          ) + 1
        ),
      },
    ];
    setAnswerSummary(arr);

    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    }
    setCurrentOption(-1);
    let myScore = setScore();
    if (currentQuestion === 4) {
      await findAndRemove("quiz_score", "quiz", selectedCategory);
      await addToDb("quiz_score", "quiz", {
        selectedCategory,
        quizData: {
          currentScore: myScore,
          dateTime: new Date().toLocaleDateString(),
          answerSummary: JSON.stringify(arr),
        },
      });

      navigate({
        pathname: "/result",
      });
    }
  }
  return (
    <div>
      <h1>
        {questionBank.length > 0 ? (
          <div>
            <QuestionCard
              question={questionBank[currentQuestion]}
              index={currentQuestion}
              currentOption={currentOption}
              setCurrentOption={setCurrentOption}
            />
            <div className="quiz-btn-div">
              <div className="quiz-btn">
                <button
                  className="quiz-button"
                  disabled={currentOption === -1}
                  onClick={async () => {
                    nextBtnClicked();
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </h1>
    </div>
  );
}

export default StartQuiz;
