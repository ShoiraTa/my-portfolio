import React, { useState, useEffect } from 'react';
import {
  SiJavascript, SiReact, SiRedux, SiJquery, SiHtml5, SiCss3, SiRuby, SiMysql, SiRubyonrails, SiGithub, SiHeroku, SiVisualstudiocode, SiWebpack,
} from 'react-icons/si';

function Projects() {
  const arr = [SiJavascript, SiReact, SiRedux, SiJquery, SiHtml5, SiCss3, SiRuby, SiMysql, SiRubyonrails, SiGithub, SiHeroku, SiVisualstudiocode];
  console.log(arr);

  const [width, setWidth] = useState(1450);
  let isDesktop = true;
  const updateMedia = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  if (width < 700) {
    isDesktop = false;
  } else {
    isDesktop = true;
  }

  return (
    <>
      <div className="section-projects">
        <h1>Projects</h1>
        <div className="projects-container">
          <div className="project-container">
            <div className="left-section-projects">
              <h2>Covid Stats web-app</h2>
              <p>In this project, I was working with the real live data from the CORONAVIRUS DATA API. This is a React capstone project it checks a list of metrics (numeric values) that I created using React and Redux.</p>
              <ul>
                <li><SiJavascript className="icon-projects" /></li>
                <li><SiReact className="icon-projects" /></li>
                <li><SiRedux className="icon-projects" /></li>
                <li><SiHtml5 className="icon-projects" /></li>
                <li><SiCss3 className="icon-projects" /></li>
                <li><SiGithub className="icon-projects" /></li>
                <li><SiVisualstudiocode className="icon-projects" /></li>
                <li><SiHeroku className="icon-projects" /></li>
              </ul>
            </div>
            <div className="right-section-projects">
              <a href="https://wizardly-aryabhata-28f609.netlify.app/">
                <div className="laptop-img" />
                <div className="phone-img" />
              </a>
            </div>

          </div>
          {isDesktop ? (
            <div className="project-container project-container-left-sided">
              <div className="right-section-projects">
                <a href="https://shoirata.github.io/RecipeApp/">
                  <div className="laptop-img laptop-img-pinch" />
                  <div className="phone-img phone-img-pinch" />
                </a>
              </div>
              <div className="left-section-projects">
                <h2>Recipie App</h2>
                <p>Do you feel like cooking something special? Then you can find a new recipe on Pinch of Salt. The recipes are sorted in three different cattegories. The users can also leave comments.</p>
                <ul>
                  <li><SiJavascript className="icon-projects" /></li>
                  <li><SiWebpack className="icon-projects" /></li>
                  <li><SiHtml5 className="icon-projects" /></li>
                  <li><SiCss3 className="icon-projects" /></li>
                  <li><SiGithub className="icon-projects" /></li>
                  <li><SiVisualstudiocode className="icon-projects" /></li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="project-container project-container-left-sided">
              <div className="left-section-projects">
                <h2>Recipie App</h2>
                <p>Do you feel like cooking something special? Then you can find a new recipe on Pinch of Salt. The recipes are sorted in three different cattegories. The users can also leave comments.</p>
                <ul>

                  <li><SiJavascript className="icon-projects" /></li>
                  <li><SiReact className="icon-projects" /></li>
                  <li><SiRedux className="icon-projects" /></li>
                  <li><SiHtml5 className="icon-projects" /></li>
                  <li><SiCss3 className="icon-projects" /></li>
                  <li><SiGithub className="icon-projects" /></li>
                  <li><SiVisualstudiocode className="icon-projects" /></li>
                  <li><SiHeroku className="icon-projects" /></li>
                </ul>
              </div>
              <div className="right-section-projects">
                <a href="https://shoirata.github.io/RecipeApp/">
                  <div className="laptop-img laptop-img-pinch" />
                  <div className="phone-img phone-img-pinch" />
                </a>
              </div>
            </div>
          )}
          <div className="project-container">
            <div className="left-section-projects">
              <h2>Expenses Traker</h2>
              <p>Keep track of your expenses using the Expenses Tracker application. The applicaion allows users to insert expenses and filter them by year. Users can also analyse their monthly expenses by the graphical representaion.</p>
              <ul>
                <li><SiJavascript className="icon-projects" /></li>
                <li><SiReact className="icon-projects" /></li>
                <li><SiHtml5 className="icon-projects" /></li>
                <li><SiCss3 className="icon-projects" /></li>
                <li><SiGithub className="icon-projects" /></li>
                <li><SiVisualstudiocode className="icon-projects" /></li>
              </ul>
            </div>
            <div className="right-section-projects">
              <a href="https://shoirata.github.io/Expenses_tracker/">
                <div className="laptop-img laptop-img-expenses" />
                <div className="phone-img phone-img-expenses" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;