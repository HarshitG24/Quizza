import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Quizzes from "./Components/Quizzes/Quizzes";
import Dashboard from "./Components/Dashboard/Dashboard";
import StartQuiz from "./Components/Quizzes/StartQuiz";
import { useState } from "react";
import Result from "./Components/Results/Result";

function App() {
  const [selectedCategory, setCategory] = useState("");
  console.log("the category is this:", selectedCategory);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quizzes"
          element={
            <Quizzes
              setCategory={setCategory}
              selectedCategory={selectedCategory}
            />
          }
        />
        <Route
          path="/start-quiz"
          element={<StartQuiz selectedCategory={selectedCategory} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
