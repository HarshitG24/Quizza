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

/**
 * Component for starting the quiz, displaying the questions and the options.
 * @component
 * @param {Object} Props - An object.
 * @param {String} props.selectedCategory - Variable which contains the name of the category selected by the user
 */

function StartQuiz(props) {
  const { selectedCategory } = props;
  const navigate = useNavigate();

  /**
   * @typedef {Number} currentQuestion
   * @description Contains the index of the current question on the Frontend.
   */
  /**
   * @typedef {Function} setCurrentQuestion — function to update the variable currentQuestion, with the index of the question shown on Frontend
   */
  const [currentQuestion, setCurrentQuestion] = useState(0);

  /**
   * @typedef {Number} currentOption
   * @description Contains the index of the current option selected by the user for the given question
   */
  /**
   * @typedef {Function} setCurrentOption — function to update the variable currentOption, with the index of the option selected by the user for the given question
   */
  const [currentOption, setCurrentOption] = useState(-1);

  /**
   * @typedef {Number} currentScore
   * @description Contains the score obtained by the user so far in ongoing quiz
   */
  /**
   * @typedef {Function} setCurrentScore — function to update the variable currentScore, with the score obtained by user based on their performance
   */
  const [currentScore, setCurrentScore] = useState(0);

  /**
   * @typedef {Array} answerSummary
   * @description Array containing the question, user's answer and correct answer.
   */
  /**
   * @typedef {Function} setAnswerSummary — function to update the variable answerSummary, everytime user completes a question and proceeds further.
   */
  const [answerSummary, setAnswerSummary] = useState([]);

  /**
   * @typedef {Array} questionBank
   * @description Array containing all the 5 questions randomly picked for the quiz
   */
  /**
   * @typedef {Function} setQuestionBank — function to update the variable questionBank, after being randomly picked from dataset.
   */
  const [questionBank, setQuestionBank] = useState([]);

  /**
   * @typedef {Function} findMyCategory
   * @param {string} selectedCategory String which contains the category selected by the user
   * @returns {Array} Returns an array of randomly picked 5 questions
   */

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

  /**
   * @typedef {Function} setScore
   * @description To calculate the score of the user.
   */
  function setScore() {
    let userAnswer = questionBank[currentQuestion]?.allOptions[currentOption];
    if (questionBank[currentQuestion].correctAnswer === userAnswer) {
      setCurrentScore(currentScore + 1);
      return currentScore + 1;
    }

    return currentScore;
  }

  /**
   * Used to encapsulate code which has side effects.
   * @typedef {Function} useEffect - React Hook which is rendered only once.
   * @param {Function} - Has an arrow function, which performs some tasks.
   * @param {Array} - Contains the list of variables which when changes, useEffect is called
   */
  useEffect(() => {
    let questions = findMyCategory(selectedCategory);
    let randomlyPickedQuestions = shuffle(questions).slice(0, 5);
    console.log("picked questions", randomlyPickedQuestions);
    setQuestionBank(randomlyPickedQuestions);
  }, []);

  /**
   * @typedef {Function} convertNumberToAlphabet
   * @param {Number} num Variable to determine, the alphabet associated with the option
   * @returns {String} Returns a string, with the corresponding alphabet
   */
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

  /**
   * @typedef {Function} nextBtnClicked
   * @description To perform operations such as calculate score, update index of current question and if quiz complete update it in database.
   */

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
            <div
              className="quiz-btn-div"
              onClick={async () => {
                nextBtnClicked();
              }}
            >
              <div className="quiz-btn">
                <button className="quiz-button" disabled={currentOption === -1}>
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
