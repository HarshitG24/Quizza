import { availableCategories } from "../../Quiz Questions/Data";
import QuizCategoryCard from "./QuizCategoryCard";

/**
 * Component for showing the UI of the cards which shows category names.
 * @component
 * @param {Object} Props - An object.
 * @param {String} props.selectedCategory - Variable which contains the name of the category selected by the user
 * @param {Function} props.setCategory - Function which updates the variable selectedCategory with the category selected by the user.
 */

function Quizzes(props) {
  const { setCategory, selectedCategory } = props;
  return (
    <div className="quiz-background">
      <QuizCategoryCard
        category={availableCategories}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default Quizzes;
