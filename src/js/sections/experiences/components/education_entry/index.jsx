import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export const EducationEntry = ({degree, graduationDate, location, school}) => (
  <div className='education-entry-component'>
    <h4>{school}</h4>
    <div className='date-degree-container'>
      <span>Graduated in {moment(graduationDate, 'YYYYMMDD').format('MMM \'YY')}</span>
      <span>{degree}</span>
    </div>
    <div className='location'>
      <i class="material-icons">location_on</i>
      <span className='location-text'>{location}</span>
    </div>
  </div>
)

EducationEntry.propTypes = {
  degree: PropTypes.string.isRequired,
  graduationDate: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired
};
