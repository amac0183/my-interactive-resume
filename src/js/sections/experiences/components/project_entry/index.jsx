import React from 'react';
import PropTypes from 'prop-types';

export const ProjectEntry = ({summary, details}) => (
  <div className='project-entry-component'>
    <p>{summary}</p>
    <ul>
      {
        details.map((detail, index) => (
          <li key={`detail-${index}`} className='detail'>{detail}</li>
        ))
      }
    </ul>
  </div>
)

ProjectEntry.defaultProps = {
  details: []
};

ProjectEntry.propTypes = {
  summary: PropTypes.string.isRequired,
  details: PropTypes.array
};
