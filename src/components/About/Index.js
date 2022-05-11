import React from "react";
import "./style.css";
import pic from "./photo.JPG";

const About = () => {
  return (
    <>
      <main>
        <div className="pic">
          <img src={pic} alt="myImg" />
        </div>
        <div className="about">
          <h1>About Me</h1>

          <h4>I am a software developer (Fresher).</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            suscipit reprehenderit aut. Accusantium id eveniet praesentium,
            porro voluptatibus sequi impedit vero ratione aspernatur vel, sunt
            dolores distinctio atque maiores nostrum!
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
