import React from 'react';
import PropTypes from 'prop-types';

export const BaseSection = ({children, title}) => {
  return (
    <div className='section'>
      <div className='card'>
        <div className='title'>
          <h2>{title}</h2>
          <hr />
        </div>
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  );
}

BaseSection.defaultProps = {
  title: 'Needs a title!'
};

BaseSection.propTypes = {
  children: PropTypes.array.isRequired
};