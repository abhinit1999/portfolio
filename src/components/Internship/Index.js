import React from "react";
import "./style.css";
const Internship = () => {
  return (
    <div>
      <section id="internship">
        <div class="section_info">
          <h1>Experience / Internship</h1>
        </div>
        <div className="internship_box">
          <div className="internship_box_left">
            <h1>
              Congnizant Technology Solutions{" "}
              <span>( From 8th Jan 2022 to 4th May 2022 )</span>
            </h1>
            <p>
              Got an opportunity from the campus to work as Programmer Analyst
              Trainee at Cognizant Technology Solutions from 8 January 2022 to 4
              May 2022. I was trained on Front-end development, mainly focused
              on React Js and JavaScript.
            </p>
          </div>
          <div className="internship_box_right">
            <h1>
              Analytics Vidhya{" "}
              <span>( From 4th May 2020 to 15th June 2020 )</span>
            </h1>
            <h3>Introduction to Data Science</h3>
            <p>
              I did summer training from 4th May to 15th June 2020 in Introduction to Data science
               at Analytics Vidhya. In which i was taught from types of machine learning and their algoriths.
              And After that they taught me some probability and statistic.
            
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;
