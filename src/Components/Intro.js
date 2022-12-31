import "./Intro.scss";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import selfie from "../Media/burna.jpeg";

const Intro = () => {
  return (
    <div className="Intro">
      <Typewriter
        options={{
          strings:
            "Congratulations! You’ve been hired as Burna Boy’s personal assistant.",
          autoStart: true,
          delay: 80,
        }}
      />
    </div>
  );
};

export default Intro;
