import { useEffect, useState } from "react";
import { getData } from "../../Model/Mininmongo";
import "./css/Dashboard.css";
import QuizCard from "./QuizCard";

function Dashboard(props) {
  const [quizesTaken, setQuizesTaken] = useState([]);
  useEffect(() => {
    getData("quiz_score", "quiz", (fetchedResult) => {
      console.log("fetchedResult for dashboard", fetchedResult);
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
