import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import Badge from 'react-bootstrap/Badge';
import { MdWork } from 'react-icons/md';
import { GiSandsOfTime } from 'react-icons/gi';

function Experience() {
  return (
    <div className="section-experience">
      <h1 className="section-title">Experience</h1>
      <div className="experience-container">
        <div className="experience-container-inner">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#FFF', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
              date="2021 - present"
              iconStyle={{ background: 'rgb(174, 148, 79)', color: '#fff' }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Part time TSE </h3>
              <h4 className="vertical-timeline-element-subtitle">Microverse inc.</h4>
              <p>
                {' '}
                Performed 100s of code reviews in HTML, Ruby & Javascript based projects for over 50+ junior developers and ensured best coding practices.
              </p>
              <p>
                Provide specialized technical advice and guidance to multiple junior developers over 1:1 video calls and chat.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#FFF', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
              date="2021"
              iconStyle={{ background: 'rgb(174, 148, 79)', color: '#fff' }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Front-end engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Llama commerce</h4>
              <p>
                Work closely with the team to help our clients launch highly functional, often complex Shopify stores.
              </p>
              <p>Optimize and redesign stores for established brands.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
              iconStyle={{ background: 'rgb(174, 148, 79)', color: '#fff' }}
              icon={<GiSandsOfTime />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
