import React from 'react';
import './Myprofile.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaReact } from 'react-icons/fa';
import { DiRuby, DiMysql } from 'react-icons/di';
import store from '../redux/store';

function Myprofile() {
  store.subscribe(() => {
    const state = store.getState();
    document.body.className = state.theme;
  });

  return (
    <>

      <div className="section-about">
        <h1>About</h1>
        <div className="secton-aboutme">
          <div className="left-section">
            <div className="image-container" />
            <div className="skills-container">
              <FaReact className="skills-icon react-icon" />
              <DiRuby className="skills-icon ruby-icon" />
              <DiMysql className="skills-icon sql-icon" />
            </div>
          </div>
          <div className="aboutme-desc">
            <h2>A curiosity-driven Front-End Developer.</h2>
            <p>
              I&apos;m passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details. And as a follower of John Maeda’s Laws Of Simplicity, I agree that less is more. I am currently enrolled in a remote software development school. I have a number of projects developed using Javascript, React, Redux, and Rails.
            </p>
            <p>
              I have experience working as a front-end engineer in an IT company where I was developing and maintaining eCommerce websites on Shopify. I&apos;m currently strengthening my back-end and front-end development skills.
            </p>
            <p>
              I&apos;m happiest when I&apos;m creating, learning, exploring and thinking about how to make things better.
            </p>
            <p>
              If you&apos;d like to get in contact about potential job opportunities, please reach out!&apos;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myprofile;
