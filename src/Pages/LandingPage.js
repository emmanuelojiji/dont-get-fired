import "./LandingPage.scss";
import { Link } from "react-router-dom";
import Intro from "../Components/Intro";
import { useState } from "react";

const LandingPage = () => {
  const [introVisible, setIntroVisible] = useState(false);

  return (
    <div className="LandingPage">
      {introVisible ? (
        <Intro />
      ) : (
        <>
          <h1>Don't get fired</h1>
          <Link to="/choose" style={{ color: "black" }} onClick={() => setIntroVisible(true)}>
            Start
          </Link>
        </>
      )}
    </div>
  );
};

export default LandingPage;
