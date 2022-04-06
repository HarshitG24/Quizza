import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Quizzes from "./Components/Quizzes/Quizzes";
import Dashboard from "./Components/Dashboard/Dashboard";
import StartQuiz from "./Components/Quizzes/StartQuiz";
import { useState } from "react";

function App() {
  const [selectedCategory, setCategory] = useState("");
  console.log("the category is", selectedCategory);
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
        <Route path="/start-quiz" element={<StartQuiz />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
