import "./Quiz.scss";
import { useState } from "react";
import QuizCard from "../Components/QuizCard";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  return (
    <div className="Quiz">
      <QuizCard />
    </div>
  );
};

export default Quiz;
