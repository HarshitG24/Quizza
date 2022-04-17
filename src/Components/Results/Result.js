import { useState, useEffect } from "react";
import { getData } from "../../Model/Mininmongo";
import "./css/Result.css";
import AnswerTable from "./AnswerTable";

/**
 * Component for showing the table UI, which contains the question, correct answer and the user answer
 * @component
 * @param {Object} Props - An object.
 * @param {String} props.selectedCategory - It contains the category of the quiz taken by the user.
 */

function Result(props) {
  const { selectedCategory } = props;

  /**
   * @typedef {Object} result
   * @description Object containing the score obtained by user, date of the quiz, array of objects, which contains question, correct and user answer
   */
  /**
   * @typedef {Function} setResult — function to update the variable result, after being fetched from minimongo database.
   */
  const [result, setResult] = useState({});

  /**
   * @typedef {Function} getPerformanceText
   * @param {Number} score The score obtained by the user in the current quiz
   * @returns {String} Returns a word string demonstrating the user's performance in the quiz
   */
  function getPerformanceText(score) {
    switch (score) {
      case 0:
        return "Very Poor";
      case 1:
        return "Very Poor";
      case 2:
        return "Poor";
      case 3:
        return "Average";
      case 4:
        return "Above Average";
      case 5:
        return "Outstanding";
      default:
        return "";
    }
  }

  /**
   * Used to encapsulate code which has side effects.
   * @typedef {Function} useEffect - React Hook which is rendered only once.
   * @param {Function} - Has an arraow function, which performs some tasks.
   * @param {Array} - Contains the list of variables which when changes, useEffect is called
   */
  useEffect(() => {
    getData("quiz_score", "quiz", (fetchedResult) => {
      fetchedResult = fetchedResult.filter(
        (q) => q.selectedCategory === selectedCategory
      );

      console.log("fetched result is", fetchedResult);

      let max = 0;
      let time = "";
      let ansSummary = [];
      (fetchedResult || []).forEach((e) => {
        if (e?.quizData?.currentScore >= max) {
          let data = e?.quizData;
          max = data?.currentScore;
          time = data?.dateTime;
          ansSummary = JSON.parse(data?.answerSummary || []);
        }
      });
      setResult({ max, time, ansSummary });
    });
  }, []);

  return (
    <div className="result">
      <h3>Here are your test results.</h3>
      <div className="result-data">
        <p className="result-data-category">Total Score: </p>
        <p>{result.max}/5</p>
      </div>

      <div className="result-data">
        <p className="result-data-category">Date of Quiz: </p>
        <p> {result.time}</p>
      </div>

      <div className="result-data">
        <p className="result-data-category">Performance: </p>
        <p> {getPerformanceText(result.max)}</p>
      </div>

      <h3>Please refer the answer key below</h3>
      {<AnswerTable ansSummary={result?.ansSummary || []} />}

      <div className="go-to-dashboard-container">
        <a href="/dashboard" className="go-to-dashboard">
          Go To Dashboard
        </a>
      </div>
    </div>
  );
}

export default Result;
