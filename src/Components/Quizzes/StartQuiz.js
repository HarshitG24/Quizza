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
import { useState } from "react";
import "./css/StartQuiz.css";

function StartQuiz(props) {
  const { selectedCategory } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOption, setCurrentOption] = useState(-1);

  function findMyCategory(selectedCategory) {
    switch (selectedCategory) {
      case "Sports & Leisure":
        return sportsLeisure;
      case "Society & Culture":
        return societyCulture;
      case "Science":
        return science;
      case "Music":
        return music;
      case "History":
        return history;
      case "Geography":
        return geography;
      case "General knowledge":
        return generalKnowledge;
      case "Food & Drink":
        return foodDrink;
      case "Film & TV":
        return filmTv;
      case "Arts & Literature":
        return artsLiterature;
      default:
        return [];
    }
  }

  let ques = findMyCategory(selectedCategory)[currentQuestion];
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
          {/* <div>
            <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
              Previous
            </button>
          </div> */}

          <div>
            <button
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                setCurrentOption(-1);
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
