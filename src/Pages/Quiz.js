import "./Quiz.scss";
import { useState } from "react";
import QuizCard from "../Components/QuizCard";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const nextQuestion = () => {
    setCurrentQuestion++;
    console.log("Correct!");
  };

  const showFiredScreen = () => {
    setCurrentQuestion();
    console.log("Wrong!");
  };

  return (
    <div className="Quiz">
      {currentQuestion ? (
        <QuizCard
          question="Question 1"
          optionOne="Right answer"
          optionOneClicked={nextQuestion}
          optionTwo="Wrong answer"
          optionTwoClicked={showFiredScreen}
        />
      ) : (
        <>
          <h1>YOU'FRE FIRED!</h1>
          <p
            onClick={() => {
              setCurrentQuestion(1);
            }}
          >
            Start again
          </p>
        </>
      )}
    </div>
  );
};

export default Quiz;
