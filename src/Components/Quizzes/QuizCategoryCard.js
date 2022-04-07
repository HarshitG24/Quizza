import "./css/QuizCategoryCard.css";
import StartQuiz from "./StartQuiz";
import { useState } from "react";

function QuizCategoryCard(props) {
  const [userReadytoQuiz, setUserReady] = useState(false);
  const [cardSelected, setSelectedCard] = useState(-1);
  const { category, setCategory, selectedCategory } = props;

  function quizNotStarted() {
    return (
      <div>
        <div className="category-group">
          {category.map((elem, index) => (
            <div
              key={index}
              className={
                index === cardSelected
                  ? "catgeory-card-selected"
                  : "catgeory-card"
              }
              onClick={() => {
                setCategory(elem);
                setSelectedCard(index);
              }}
            >
              <p> {elem} </p>
            </div>
          ))}
        </div>

        <div className="take-quiz-btn">
          <button onClick={() => setUserReady(true)}>Take Quiz</button>
        </div>
      </div>
    );
  }
  return (
    <div>
      {userReadytoQuiz ? (
        <StartQuiz selectedCategory={selectedCategory} />
      ) : (
        quizNotStarted()
      )}
    </div>
  );
}

export default QuizCategoryCard;
