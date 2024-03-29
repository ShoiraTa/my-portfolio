import React, { useState, useEffect } from 'react';
import {
  SiJavascript,
  SiRubyonrails,
  SiRuby,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiHeroku,
  SiVisualstudiocode,
  SiWebpack,
} from 'react-icons/si';

function Projects() {
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
              <h2>Olam Report</h2>
              <p>
                Platform for cryptocurrency Enthusiasts. Get the latest prices, statistics, links and news about all the
                cryptocurrencies on one platform. Check charts and filter the currencies!
              </p>
              <ul>
                <li>
                  <SiJavascript className="icon-projects" />
                </li>
                <li>
                  <SiReact className="icon-projects" />
                </li>
                <li>
                  <SiHtml5 className="icon-projects" />
                </li>
                <li>
                  <SiCss3 className="icon-projects" />
                </li>
                <li>
                  <SiGithub className="icon-projects" />
                </li>
                <li>
                  <SiVisualstudiocode className="icon-projects" />
                </li>
              </ul>
            </div>
            <div className="right-section-projects">
              <a href="https://olam-report.fly.dev/" target="_blank" rel="noopener noreferrer">
                <div className="laptop-img cryptoDesktop" />
                <div className="phone-img cryptoMobile" />
              </a>
            </div>
          </div>

          {isDesktop ? (
            <div className="project-container project-container-left-sided">
              <div className="right-section-projects">
                <a href="https://github.com/ShoiraTa/budget-app">
                  <div className="laptop-img budget-tab" />
                  <div className="phone-img budgetMob" />
                </a>
              </div>
              <div className="left-section-projects">
                <h2>Budgetly, mobile web-app</h2>
                <p>
                  A mobile web application where users can manage their budget: they have a list of transactions
                  associated with a category, so that they can see how much money they spent and on what.
                </p>
                <ul>
                  <li>
                    <SiRubyonrails className="icon-projects" />
                  </li>
                  <li>
                    <SiRuby className="icon-projects" />
                  </li>
                  <li>
                    <SiHtml5 className="icon-projects" />
                  </li>
                  <li>
                    <SiCss3 className="icon-projects" />
                  </li>
                  <li>
                    <SiGithub className="icon-projects" />
                  </li>
                  <li>
                    <SiVisualstudiocode className="icon-projects" />
                  </li>
                  <li>
                    <SiHeroku className="icon-projects" />
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="project-container project-container-left-sided">
              <div className="left-section-projects">
                <h2>Budgetly, mobile web-app</h2>
                <p>
                  A mobile web application where users can manage their budget: they have a list of transactions
                  associated with a category, so that they can see how much money they spent and on what.
                </p>
                <ul>
                  <li>
                    <SiRubyonrails className="icon-projects" />
                  </li>
                  <li>
                    <SiRuby className="icon-projects" />
                  </li>
                  <li>
                    <SiRedux className="icon-projects" />
                  </li>
                  <li>
                    <SiHtml5 className="icon-projects" />
                  </li>
                  <li>
                    <SiCss3 className="icon-projects" />
                  </li>
                  <li>
                    <SiGithub className="icon-projects" />
                  </li>
                  <li>
                    <SiVisualstudiocode className="icon-projects" />
                  </li>
                  <li>
                    <SiHeroku className="icon-projects" />
                  </li>
                </ul>
              </div>
              <div className="right-section-projects">
                <a href="https://shoirata.github.io/RecipeApp/">
                  <div className="laptop-img budget-tab" />
                  <div className="phone-img budgetMob" />
                </a>
              </div>
            </div>
          )}

          <div className="project-container">
            <div className="left-section-projects">
              <h2>Covid Stats web-app</h2>
              <p>
                A mobile web application where users can manage their budget: they have a list of transactions
                associated with a category, so that they can see how much money they spent and on what.
              </p>
              <ul>
                <li>
                  <SiJavascript className="icon-projects" />
                </li>
                <li>
                  <SiReact className="icon-projects" />
                </li>
                <li>
                  <SiRedux className="icon-projects" />
                </li>
                <li>
                  <SiHtml5 className="icon-projects" />
                </li>
                <li>
                  <SiCss3 className="icon-projects" />
                </li>
                <li>
                  <SiGithub className="icon-projects" />
                </li>
                <li>
                  <SiVisualstudiocode className="icon-projects" />
                </li>
                <li>
                  <SiHeroku className="icon-projects" />
                </li>
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
                <p>
                  Do you feel like cooking something special? Then you can find a new recipe on Pinch of Salt. The
                  recipes are sorted in three different cattegories. The users can also leave comments.
                </p>
                <ul>
                  <li>
                    <SiJavascript className="icon-projects" />
                  </li>
                  <li>
                    <SiWebpack className="icon-projects" />
                  </li>
                  <li>
                    <SiHtml5 className="icon-projects" />
                  </li>
                  <li>
                    <SiCss3 className="icon-projects" />
                  </li>
                  <li>
                    <SiGithub className="icon-projects" />
                  </li>
                  <li>
                    <SiVisualstudiocode className="icon-projects" />
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="project-container project-container-left-sided">
              <div className="left-section-projects">
                <h2>Recipie App</h2>
                <p>
                  Do you feel like cooking something special? Then you can find a new recipe on Pinch of Salt. The
                  recipes are sorted in three different cattegories. The users can also leave comments.
                </p>
                <ul>
                  <li>
                    <SiJavascript className="icon-projects" />
                  </li>
                  <li>
                    <SiReact className="icon-projects" />
                  </li>
                  <li>
                    <SiRedux className="icon-projects" />
                  </li>
                  <li>
                    <SiHtml5 className="icon-projects" />
                  </li>
                  <li>
                    <SiCss3 className="icon-projects" />
                  </li>
                  <li>
                    <SiGithub className="icon-projects" />
                  </li>
                  <li>
                    <SiVisualstudiocode className="icon-projects" />
                  </li>
                  <li>
                    <SiHeroku className="icon-projects" />
                  </li>
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
        </div>
      </div>
    </>
  );
}

export default Projects;
