import "./Intro.scss";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="bubble">
        <Typewriter
          options={{
            strings:
              "Hey, it's Burna✊. Well done for landing the job. You start today, good luck and don't get fired!",

            autoStart: true,
          }}
        />
      </div>
      <Link to="/start">Start</Link>
    </div>
  );
};

export default Intro;
