import "./css/AnswerTable.css";

function AnswerTable(props) {
  const { ansSummary } = props;
  console.log("answer summary", ansSummary);
  return (
    <div>
      <table className="ans-table">
        <tr>
          <th className="table-col table-col-top table-col-left">Question</th>
          <th className="table-col table-col-top">Correct Answer</th>
          <th className="table-col table-col-top">User Answer</th>
        </tr>
        {ansSummary.map((a) => {
          return (
            <tr
              className={
                a.correctAnswer === a.userAnswer
                  ? "table-row-green"
                  : "table-row-red"
              }
            >
              <td className="table-col-left">{a.question}</td>
              <td className="table-col-left">{a.correctAnswer}</td>
              <td className="table-col-left">{a.userAnswer}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AnswerTable;
