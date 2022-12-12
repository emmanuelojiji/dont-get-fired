import "./Intro.scss";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <>
      <h1>Intro</h1>
      <Typewriter
        options={{
          strings:
            "You got the job! You've been hired as Burna Boy's new personal assistant. He'll need you to make important decisions for him. Good luck and don't get fired!",

          autoStart: true,
        }}
      />
      <Link to="/start">Start</Link>
    </>
  );
};

export default Intro;
