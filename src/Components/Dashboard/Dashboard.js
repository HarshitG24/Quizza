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
   * @function
   * @param {Function} Imperative_Function An imperative function, which will be exceuted
   * @param {Array} Contains the list of parameters which determines, when to call the function again
   */

  useEffect(() => {
    getData("quiz_score", "quiz", (fetchedResult) => {
      setQuizesTaken(fetchedResult);
    });
  }, []);

  return (
    <div className="dashboard">
      {quizesTaken.length > 0 ? (
        <h3>Following are the quizes taken so far</h3>
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
