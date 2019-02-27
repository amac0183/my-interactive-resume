import React from 'react';
import PropTypes from 'prop-types';
import {styled} from 'linaria/react';
import {H2} from '../../components/h2'
import {Card} from './components/card'
import {TitleContainer} from './components/title_container'

export const BaseSection = ({children, title}) => {
  return (
    <div className='section'>
      <Card>
        <TitleContainer>
          <H2>{title}</H2><br />
        </TitleContainer>
        <div className='content'>
          {children}
        </div>
      </Card>
    </div>
  );
}

BaseSection.defaultProps = {
  title: 'Needs a title!'
};

BaseSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};