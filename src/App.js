import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Quizzes from "./Components/Quizzes/Quizzes";
import Dashboard from "./Components/Dashboard/Dashboard";
import StartQuiz from "./Components/Quizzes/StartQuiz";
import { useState } from "react";
import Result from "./Components/Results/Result";
import Home from "./Components/Home/Home";

/**
 * Parent component which contains all the child components, as well as handles routing.
 * @component
 */
function App() {
  /**
   * @typedef {Object} selectedCategory
   * @description Variable which contains the category selected by the user on quizzes page
   */
  /**
   * @typedef {Function} setCategory — function to update the variable selectedCategory, with the category selected by the user.
   */
  const [selectedCategory, setCategory] = useState("");
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
        <Route
          path="/result"
          element={<Result selectedCategory={selectedCategory} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
