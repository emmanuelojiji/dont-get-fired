import "./Intro.scss";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import selfie from "../Media/burna.jpeg";

const Intro = () => {
  const [imageSlide, setImageSlide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImageSlide(true);
    }, 10650);
  });
  return (
    <div className="Intro">
      <div className="bubble">
        <Typewriter
          options={{
            strings:
              "Hey, it's Burna✊. Well done for landing the job as my personal assistant. You start today, good luck and don't get fired!",
            autoStart: true,
            delay: 80,
          }}
        />
      </div>
      {imageSlide && <img src={selfie} />}
      <Link to="/start">Start</Link>
    </div>
  );
};

export default Intro;
