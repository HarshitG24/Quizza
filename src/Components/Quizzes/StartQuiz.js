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

function StartQuiz(props) {
  const { selectedCategory } = props;
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOption, setCurrentOption] = useState(-1);
  const [currentScore, setCurrentScore] = useState(0);

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

    // quesArr = shuffle(quesArr).splice(0, 5);
    // console.log("xyz", quesArr);
    return quesArr;
  }

  function shuffle(arr) {
    let j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1));
      x = arr[index];
      arr[index] = arr[j];
      arr[j] = x;
    }
    return arr;
  }

  let ques = findMyCategory(selectedCategory)[currentQuestion];

  function setScore() {
    let userAnswer = ques?.allOptions[currentOption];
    if (ques.correctAnswer === userAnswer) {
      setCurrentScore(currentScore + 1);
    }
  }

  return (
    <div>
      <h1>
        <QuestionCard
          question={ques}
          index={currentQuestion}
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
        />
        <div className="quiz-btn">
          <div>
            <button
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                setCurrentOption(-1);
                setScore();
                if (currentQuestion + 1 >= 5) {
                  navigate({
                    pathname: "/result",
                    search: `?result=${currentScore}`,
                  });
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default StartQuiz;
