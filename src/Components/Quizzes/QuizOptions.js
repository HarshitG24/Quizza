import { optionLabels } from "../../Model/Helpers";
import { useState, useEffect } from "react";

function QuizOptions(props) {
  const [currentOption, setCurrentOption] = useState(-1);
  const { option, index } = props;

  useEffect(() => {
    setCurrentOption(-1);
  }, []);
  return (
    <div
      onClick={() => setCurrentOption(index)}
      className={index === currentOption ? "option-row-selected" : "option-row"}
    >
      <label>{optionLabels[index]}</label>
      <li className="option-label">{option}</li>
    </div>
  );
}

export default QuizOptions;
