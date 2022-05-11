import React from "react";
import "./style.css";
const Projects = () => {
  return (
    <section id="projects">
      <div className="section_info">
        <h1>Projects</h1>
      </div>
      <div className="project_box">
        <div className="first">
          <h1>E-commerce App</h1>
          <h3>( May 2022 )</h3>
          <p>
            A very similar to amazon.in where I have used React Js front-end
            library to build this application. All the images are dynamically
            e.i I have used props to do so. And by using context Api we can add
            and remove items from the cart. Still i am working on it to make it
            more better.
          </p>
          <span><a href="">Github</a></span>
          <span><a href="">Live Demo</a></span>
        
        </div>
        <div className="second">
          <h1>My Portfolio </h1>
          <h3>( April 2022 )</h3>
          <p>
            This project i have developed so that one can get to 
            all about me in just having at one place.
            Here you can see all my projects,experiences,skills and many more things.
          </p>
          <span><a href="">Github</a></span>
          <span><a href="">Live Demo</a></span>
        
        </div>
        <div className="third">
          <h1>Food Ordering App</h1>
          <h3>( Form March 2022 to April 2022 )</h3>
          <p>
            This app is built in React Js and by using Redux, one can change
            their cart section e.i one can add items and remove the items from
            the cart. And this app is fully responsive e.i responsive for
            desktop, tablets, and mobiles.

          </p>
          <span><a href="">Github</a></span>
          <span><a href="">Live Demo</a></span>
        
        </div>
      </div>
    </section>
  );
};

export default Projects;
