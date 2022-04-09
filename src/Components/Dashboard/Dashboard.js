import { useEffect } from "react";
import { getData } from "../../Model/Mininmongo";

function Dashboard(props) {
  useEffect(() => {
    getData("quiz_score", "quiz", (fetchedResult) => {
      console.log("fetchedResult for dashboard", fetchedResult);
    });
  }, []);

  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
}
export default Dashboard;
