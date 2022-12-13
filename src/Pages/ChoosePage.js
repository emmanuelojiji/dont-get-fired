import "./ChoosePage.scss";
import { Link } from "react-router-dom";
import Intro from "../Components/Intro";
import { useState } from "react";

const ChoosePage = () => {
  const [introVisible, setIntroVisible] = useState(false);

  return (
    <div className="ChoosePage">
      <Link to="/quiz">Burna Boy</Link>
    </div>
  );
};

export default ChoosePage;
