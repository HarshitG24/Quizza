import "./css/AnswerTable.css";

/**
 * Component for showing the table UI, which contains the question, correct answer and the user answer
 * @component
 * @param {Object} Props - An object.
 * @param {Object} props.ansSummary - Array which conatins the the question number, correct answer and user answer
 */
function AnswerTable(props) {
  const { ansSummary } = props;
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
