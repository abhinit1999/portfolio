import React from "react";
import "./style.css";
const Projects = () => {
  return (
    <section id="projects">
      <div className="section_info">
        <h1>Projects</h1>
      </div>
      <div className="project_box">
        <div className="third">
          <h1>Recipes Finder App</h1>
          <h3>( May 2022 )</h3>
          <p>
            A food recipes App that has almost all the food recipes anyone can
            use to make any food. I have used edamma food recipes API in this
            project to get recipes. This App is made in React Js and fully
            responsive.
          </p>
          <span>
            <a href="https://github.com/abhinit1999/foodRecipies" target="_blank">
              Github
            </a>
          </span>
          <span>
            <a href="https://food-recipies-by-abhinit.vercel.app/" target="_blank">
              Live Demo
            </a>
          </span>
        </div>
        <div className="first">
          <h1>E-commerce App</h1>
          <h3>( March 2022 To April 2022 )</h3>
          <p>
            A very similar to amazon.in where I have used React Js front-end
            library to build this application. All the images are dynamically
            e.i I have used props to do so. And by using context Api we can add
            and remove items from the cart. Still i am working on it to make it
            more better.
          </p>
          <span>
            <a href="https://github.com/abhinit1999/onlineshop" target="_blank">
              Github
            </a>
          </span>
          <span>
            <a href="https://e-online-shop.vercel.app/" target="_blank">
              Live Demo
            </a>
          </span>
        </div>
        <div className="second">
          <h1>My Portfolio </h1>
          <h3>( March 2022 )</h3>
          <p>
            This project i have developed so that one can get to all about me in
            just having at one place. Here you can see all my
            projects,experiences,skills and many more things.
          </p>
          <span>
            <a href="https://github.com/abhinit1999/portfolio" target="_blank">
              Github
            </a>
          </span>
          <span>
            <a href="https://portfolio-abhinit.vercel.app/" target="_blank">
              Live Demo
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
