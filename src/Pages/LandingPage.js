import "./LandingPage.scss";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>Landing Page</h1>
      <Link to="/start">Start Quiz</Link>
    </div>
  );
};

export default LandingPage;
