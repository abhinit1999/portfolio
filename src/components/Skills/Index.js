import React from "react";
import './style.css';
const Skills = () => {
  return (
    <div>
      <section id="skills">
        <div className="section_info">
          <h1>Skills</h1>
        </div>
        <div className="skills_row">
          <div className="skill_left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum quibusdam libero, reiciendis temporibus quia
              perspiciatis? Veritatis itaque nam, qui necessitatibus eaque earum
              quisquam illum facere assumenda. Odit, minima officia!
            </p>
            <button className="cv">Read More...</button>
          </div>
          <div className="skill_right">
              <div className="progress_div">
                  <p>
                      <span>React Js</span>
                      <br />
                      <progress value="75" max="100"></progress>
                      <span>75%</span>
                  </p>
                  <p>
                      <span>HTML</span>
                      <br />
                      <progress value="90" max="100"></progress>
                      <span>90%</span>
                  </p>
                  <p>
                      <span>CSS</span>
                      <br />
                      <progress value="85" max="100"></progress>
                      <span>85%</span>
                  </p>
                  <p>
                      <span>JavaScript</span>
                      <br />
                      <progress value="85" max="100"></progress>
                      <span>85%</span>
                  </p>
                  <p>
                      <span>C++</span>
                      <br />
                      <progress value="85" max="100"></progress>
                      <span>85%</span>
                  </p>
                  <p>
                      <span>Python</span>
                      <br />
                      <progress value="75" max="100"></progress>
                      <span>75%</span>
                  </p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
