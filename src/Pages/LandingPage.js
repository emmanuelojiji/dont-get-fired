import "./LandingPage.scss";
import { Link } from "react-router-dom";
import Intro from "../Components/Intro";
import { useState } from "react";

const LandingPage = () => {
  const [introVisible, setIntroVisible] = useState(true);

  return (
    <div className="LandingPage">
      {introVisible ? (
    <Intro />
      ) : (
        <h1>Don't get fired</h1>
      )}
    </div>
  );
};

export default LandingPage;
