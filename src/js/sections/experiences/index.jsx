import React from 'react';
import PropTypes from 'prop-types';
import {BaseSection} from '../base_section/index.jsx';
import {EducationEntry} from './components/education_entry/index.jsx';
import {ExperienceEntry} from './components/experience_entry/index.jsx';

export const ExperiencesSection = ({activities, education, work}) => (
  <div id='experiences'>
    <BaseSection title='Experiences'>
      <div className='education-section'>
        <h3>
          <i class="material-icons">school</i> Education
        </h3>
        {
          education.map((school, index) => (
            <EducationEntry key={`education-${index}`} {...school} />
          ))
        }
      </div>
      <div className='work-section'>
        <h3>
          <i class="material-icons">work</i> Work
        </h3>
        {
          work.map((workExperience, index) => (
            <ExperienceEntry key={`work-${index}`} {...workExperience} />
          ))
        }
      </div>
      <div className='activities-section'>
        <h3>Activities</h3>
        <ul className='activities-list'>
          {
            activities.map((activity, index) => (
              <li key={`activity-detail-${index}`} className='detail'>{activity}</li>
            ))
          }
        </ul>
      </div>
    </BaseSection>
  </div>
)

ExperiencesSection.defaultProps = {
  activities: []
};

ExperiencesSection.propTypes = {
  activities: PropTypes.array.isRequired,
  education: PropTypes.array.isRequired,
  work: PropTypes.array.isRequired
};
