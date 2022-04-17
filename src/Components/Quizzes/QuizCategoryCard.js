import "./css/QuizCategoryCard.css";
import StartQuiz from "./StartQuiz";
import { useState } from "react";

/**
 * Component for UI of all the possible categories available to user to take quiz
 * @component
 * @param {Object} Props - An object.
 * @param {Array} props.category - Array that contains all the available categories
 * @param {Function} props.setCategory - Function to set the category selected by the user in the variable selectedCategory
 * @param {string} props.selectedCategory - Contains the category selected by the user for the quiz
 */

function QuizCategoryCard(props) {
  /**
   * @typedef {Boolean} userReadytoQuiz
   * @description varible to determine, wheather user had selected the category or not.
   */
  /**
   * @typedef {Function} setUserReady — to set the variable userReadytoQuiz to true, which implies that user has selected the category for the quiz.
   */
  const [userReadytoQuiz, setUserReady] = useState(false);

  /**
   * @typedef {number} cardSelected
   * @description varible to determine the category selected by the user.
   */
  /**
   * @typedef {Function} setSelectedCard — to set the variable cardSelected to index of the category card selected by the user.
   */
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
          <button
            id="take-quiz"
            className={
              selectedCategory === ""
                ? "quiz-btn quiz-btn-disabled"
                : "quiz-btn"
            }
            disabled={selectedCategory === ""}
            onClick={() => setUserReady(true)}
          >
            Take Quiz
          </button>
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
