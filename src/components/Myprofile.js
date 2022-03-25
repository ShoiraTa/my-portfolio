import React from 'react';
import './Myprofile.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineArrowRight } from 'react-icons/ai';
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
          </div>
          <div className="aboutme-desc">
            <h2>A curiosity-driven Full-stack Developer.</h2>
            {'\n'}
            {'\n'}
            <p>
              I&apos;m passionate about bringing both the technical and visual aspects of digital products to life. User
              experience, beautiful pixels and writing clean accessible, human code matters to me. I believe that less
              is more. I am currently enrolled in a remote software development school. I have a number of projects
              developed using Javascript, React, Redux, and Rails.
            </p>
            <p>
              I have experience working as a Full-stack engineer in an IT company where I was developing and maintaining
              eCommerce websites on Shopify. I&apos;m currently strengthening my back-end development skills.
            </p>
            <p>
              I&apos;m happiest when I&apos;m creating, learning, exploring and thinking about how to make things
              better.
            </p>
            <p>If you&apos;d like to get in contact about potential job opportunities, please reach out!&apos;</p>
            <a href="#form" className="btn btn-contact">
              <span>
                Contact me
                <AiOutlineArrowRight />
              </span>
              <i className="far fa-envelope-open" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myprofile;
