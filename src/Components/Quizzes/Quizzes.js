import { availableCategories } from "../../Quiz Questions/Data";
import QuizCategoryCard from "./QuizCategoryCard";

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
