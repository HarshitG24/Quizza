import { optionLabels } from "../../Model/Helpers";
import { useEffect } from "react";

/**
 * Component for showing the options for the current question.
 * @component
 * @param {Object} Props - An object.
 * @param {Array} props.options - Array containing all the possible options to the question
 * @param {Number} props.currentOption - Variable which contains the index of the option selected by the user
 * @param {Function} props.setCurrentOption - Function which sets the index of the option selected by the user in the variable currentOption
 */
function QuizOptions(props) {
  const { options, currentOption, setCurrentOption } = props;

  useEffect(() => {
    setCurrentOption(-1);
  }, []);
  return (
    <div className="quiz-option-div">
      {options.map((e, index) => {
        return (
          <div
            onClick={() => setCurrentOption(index)}
            className={
              index === currentOption ? "option-row-selected" : "option-row"
            }
          >
            <label>{optionLabels[index]}</label>
            <li className="option-label">{e}</li>
          </div>
        );
      })}
    </div>
  );
}

export default QuizOptions;
