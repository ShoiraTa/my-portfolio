import React from 'react';
import './Myprofile.css';
import {
  SiJavascript, SiReact, SiRedux, SiJquery, SiHtml5, SiCss3, SiRuby, SiMysql, SiRubyonrails, SiGithub, SiHeroku, SiVisualstudiocode, SiWebpack, SiGit,
} from 'react-icons/si';

import { MdDevices } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';

function Skills() {
  return (
    <div className="section-skills">
      <h1>Skills</h1>
      <ul className="icons-container">
        <li className="icon-card">
          <SiJavascript className="skills-icon" />
          <span>JavaScript</span>
        </li>
        <li className="icon-card">
          <SiReact className="skills-icon" />
          <span>React</span>
        </li>
        <li className="icon-card">
          <SiRedux className="skills-icon" />
          <span>Redux</span>
        </li>
        <li className="icon-card">
          <SiJquery className="skills-icon" />
          <span>Jquery</span>
        </li>
        <li className="icon-card">
          <SiHtml5 className="skills-icon" />
          <span>Html5</span>
        </li>
        <li className="icon-card">
          <SiCss3 className="skills-icon" />
          <span>Css5</span>
        </li>
        <li className="icon-card">
          <SiRuby className="skills-icon" />
          <span>Ruby</span>
        </li>
        <li className="icon-card">
          <SiMysql className="skills-icon" />
          <span>Mysql</span>
        </li>
        <li className="icon-card">
          <FiSettings className="skills-icon" />
          <span>RESTful APIs</span>
        </li>
        <li className="icon-card">
          <SiRubyonrails className="skills-icon" />
          <span>ROR</span>
        </li>
        <li className="icon-card">
          <SiGithub className="skills-icon" />
          <span>Github</span>
        </li>
        <li className="icon-card">
          <SiGit className="skills-icon" />
          <span>Git</span>
        </li>
        <li className="icon-card">
          <SiHeroku className="skills-icon" />
          <span>Heroku</span>
        </li>
        <li className="icon-card">
          <SiVisualstudiocode className="skills-icon" />
          <span>VS Code</span>
        </li>
        <li className="icon-card">
          <MdDevices className="skills-icon" />
          <span>Responsive design</span>
        </li>
        <li className="icon-card">
          <SiWebpack className="skills-icon" />
          <span>Webpack</span>
        </li>
      </ul>
      <p>
        Currently working on:
        Improving my skills and understanding of Ruby on Rails and Redux.
      </p>
    </div>
  );
}

export default Skills;
