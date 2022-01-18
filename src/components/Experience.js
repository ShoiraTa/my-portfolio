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
              date="2011 - present"
              iconStyle={{ background: 'rgb(174, 148, 79)', color: '#fff' }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#FFF', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(174, 148, 79)', color: '#fff' }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
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
