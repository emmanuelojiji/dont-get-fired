import "./QuizCard.scss";

const QuizCard = ({
  question,
  optionOne,
  optionOneClicked,
  optionTwo,
  optionTwoClicked,
}) => {
  return (
    <div className="QuizCard">
      <h1>{question}</h1>

      <p onClick={optionOneClicked}>{optionOne}</p>
      <p onClick={optionTwoClicked}>{optionTwo}</p>
    </div>
  );
};

export default QuizCard;
