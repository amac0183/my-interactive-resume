import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {ProjectEntry} from '../project_entry/index.jsx';

export const ExperienceEntry = ({company, endDate, location, position, projects, startDate}) => (
  <div className='experience-entry-component'>
    <h4>{company}</h4>
    <div className='date-position-container'>
      <span>
        {moment(startDate, 'YYYYMMDD').format('MMM \'YY')} - {
          endDate 
            ? moment(endDate, 'YYYYMMDD').format('MMM \'YY')
            : 'Present'
        }
      </span>
      <span>{position}</span>
    </div>
    <div className='location'>
      <i class="material-icons">location_on</i>
      <span className='location-text'>{location}</span>
    </div>
    <ul>
      {
        projects.map((project, index) => (
          <ProjectEntry key={`project-${index}`} {...project} />
        ))
      }
    </ul>
  </div>
)

ExperienceEntry.defaultProps = {
  projects: []
};

ExperienceEntry.propTypes = {
  company: PropTypes.string.isRequired,
  endDate: PropTypes.number,
  location: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  startDate: PropTypes.number.isRequired,
};
