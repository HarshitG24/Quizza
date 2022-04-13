import { optionLabels } from "../../Model/Helpers";
import { useState, useEffect } from "react";

function QuizOptions(props) {
  //   const [currentOption, setCurrentOption] = useState(-1);
  const { options, currentOption, setCurrentOption } = props;

  useEffect(() => {
    setCurrentOption(-1);
  }, []);
  return (
    // <div
    //   onClick={() => setCurrentOption(index)}
    //   className={index === currentOption ? "option-row-selected" : "option-row"}
    // >
    //   <label>{optionLabels[index]}</label>
    //   <li className="option-label">{option}</li>
    // </div>

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
