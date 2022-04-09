import { useState, useEffect } from "react";
import { getData } from "../../Model/Mininmongo";
import "./css/Result.css";

function Result(props) {
  const { selectedCategory } = props;
  const [result, setResult] = useState({});

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
    <div>
      <h1>Here are your test results.</h1>
      <p>Score: {result.max}/20</p>
      <p>Date: {result.time}</p>
      {(result?.ansSummary || []).map((e) => {
        return (
          <div className="result-group">
            <p>Question: {e.question}</p>
            <p>Correct Answer: {e.correctAnswer}</p>
            <p>User Answer: {e.userAnswer}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Result;
