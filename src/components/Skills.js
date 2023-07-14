import React from 'react';
import './Myprofile.css';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiRuby,
  SiMysql,
  SiRubyonrails,
  SiGithub,
  SiHeroku,
  SiElixir,
  SiRedis,
  SiDocker,
  SiAmazon,
} from 'react-icons/si';

// import { MdDevices } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';

function Skills() {
  return (
    <div className="section-skills">
      <h1>Skills</h1>
      <ul className="icons-container">
        <li className="icon-card">
          <FiSettings className="skills-icon" />
          <span>RESTful APIs</span>
        </li>
        <li className="icon-card">
          <SiRubyonrails className="skills-icon" />
          <span>ROR</span>
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
          <SiElixir className="skills-icon" />
          <span>Elixir</span>
        </li>
        <li className="icon-card">
          <SiRedis className="skills-icon" />
          <span>Redis</span>
        </li>

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
          <SiHtml5 className="skills-icon" />
          <span>Html5</span>
        </li>
        <li className="icon-card">
          <SiCss3 className="skills-icon" />
          <span>Css5</span>
        </li>

        <li className="icon-card">
          <SiGithub className="skills-icon" />
          <span>Github</span>
        </li>

        <li className="icon-card">
          <SiHeroku className="skills-icon" />
          <span>Heroku</span>
        </li>

        <li className="icon-card">
          <SiDocker className="skills-icon" />
          <span>Docker</span>
        </li>
        <li className="icon-card">
          <SiAmazon className="skills-icon" />
          <span>AWS</span>
        </li>
      </ul>
      <p>Currently working on: Improving my skills and understanding of Ruby on Rails and Redux.</p>
    </div>
  );
}

export default Skills;
