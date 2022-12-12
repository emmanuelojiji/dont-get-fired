import "./QuizCard.scss";

const QuizCard = ({
  title,
  question,
  optionOne,
  optionOneClicked,
  optionTwo,
  optionTwoClicked,
}) => {
  return (
    <div className="QuizCard">
      <h1 className="title">{title}</h1>
      <p>{question}</p>

      <div className="option-container">
        <p onClick={optionOneClicked}>{optionOne}</p>
        <p onClick={optionTwoClicked}>{optionTwo}</p>
      </div>
    </div>
  );
};

export default QuizCard;
