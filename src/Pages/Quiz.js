import "./Quiz.scss";
import { useEffect, useState } from "react";
import QuizCard from "../Components/QuizCard";
import Intro from "../Components/Intro";

const Quiz = () => {
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntroVisible(false);
      setCurrentQuestion(1);
    }, 12000);
  });

  const [currentQuestion, setCurrentQuestion] = useState();

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    console.log("Correct!");
  };

  const showFiredScreen = () => {
    setCurrentQuestion("");
    console.log("Wrong!");
  };

  return (
    <div className="Quiz">
      {introVisible && <Intro />}

      {(() => {
        switch (currentQuestion) {
          case 1:
            return (
              <QuizCard
                title="The Grammys"
                question="Tomorrow is the biggest award show of the year. Burna Boy needs an opinion on whether to drink a smoothie or have a heavy breakfast."
                optionOne="Right answer"
                optionOneClicked={nextQuestion}
                optionTwo="Wrong answer"
                optionTwoClicked={showFiredScreen}
              />
            );
          case 2:
            return (
              <QuizCard
                title="The VMAs"
                question="Tomorrow is the biggest award show of the year. Burna Boy needs an opinion on whether to drink a smoothie or have a heavy breakfast."
                optionOne="Right answer"
                optionOneClicked={nextQuestion}
                optionTwo="Wrong answer"
                optionTwoClicked={showFiredScreen}
              />
            );
          case 3:
            return (
              <QuizCard
                title="The Soul Trains"
                question="Tomorrow is the biggest award show of the year. Burna Boy needs an opinion on whether to drink a smoothie or have a heavy breakfast."
                optionOne="Right answer"
                optionOneClicked={nextQuestion}
                optionTwo="Wrong answer"
                optionTwoClicked={showFiredScreen}
              />
            );
          case 4:
            return (
              <QuizCard
                title="The Headies"
                question="Tomorrow is the biggest award show of the year. Burna Boy needs an opinion on whether to drink a smoothie or have a heavy breakfast."
                optionOne="Right answer"
                optionOneClicked={nextQuestion}
                optionTwo="Wrong answer"
                optionTwoClicked={showFiredScreen}
              />
            );

          default:
            return null;
        }
      })()}

      {currentQuestion === "" && (
        <>
          <h1>YOU'RE FIRED!</h1>
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
