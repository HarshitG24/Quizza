import { useEffect, useState } from "react";
import { getData } from "../../Model/Mininmongo";
import "./css/Dashboard.css";
import QuizCard from "./QuizCard";

/**
 * Component for showing UI for all the quizzes taken by user so far, including date of quiz, score and answer key.
 * @component
 *
 */

function Dashboard() {
  /**
   * @typedef {Boolean} quizesTaken
   * @description stores the quizzes taken by user
   */
  /**
   * @typedef {Function} setQuizesTaken — function to store the quizzes taken so far by user
   */

  const [quizesTaken, setQuizesTaken] = useState([]);

  /**
   * Used to encapsulate code which has side effects.
   * @typedef {Function} useEffect - React Hook which is rendered only once.
   * @param {Function} - Has an arrow function, which performs some tasks.
   * @param {Array} - Contains the list of variables which when changes, useEffect is called
   */

  useEffect(() => {
    getData("quiz_score", "quiz", (fetchedResult) => {
      setQuizesTaken(fetchedResult);
    });
  }, []);

  return (
    <div className="dashboard">
      {quizesTaken.length > 0 ? (
        <h3 className="dash-text">Following are the quizes taken so far</h3>
      ) : null}

      {quizesTaken.length > 0 ? (
        quizesTaken.map((q, index) => {
          return <QuizCard key={index} quiz={q} />;
        })
      ) : (
        <div className="no-test">
          <p className="no-test-text">No Tests taken</p>
        </div>
      )}
    </div>
  );
}
export default Dashboard;
