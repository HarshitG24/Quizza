import { useState, useEffect } from "react";
import { getData } from "../../Model/Mininmongo";
import "./css/Result.css";
import AnswerTable from "./AnswerTable";

function Result(props) {
  const { selectedCategory } = props;
  const [result, setResult] = useState({});

  function getPerformanceText(score) {
    switch (score) {
      case 1:
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

  useEffect(() => {
    getData("quiz_score", "quiz", (fetchedResult) => {
      fetchedResult = fetchedResult.filter(
        (q) => q.selectedCategory === selectedCategory
      );

      let max = 0;
      let time = "";
      let ansSummary = [];
      (fetchedResult || []).forEach((e) => {
        if (e?.quizData?.currentScore >= max) {
          console.log("e", e);
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
