import React from 'react';
import PropTypes from 'prop-types'

export const Cover = ({name, title}) => {
  return (
    <div id='cover'>
      <div className='container'>
        <h1>{name}</h1>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

Cover.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
