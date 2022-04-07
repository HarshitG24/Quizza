function StartQuiz(props) {
  const { selectedCategory } = props;
  return (
    <div>
      <h1>{selectedCategory}</h1>
    </div>
  );
}

export default StartQuiz;
