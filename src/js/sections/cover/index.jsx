import React from 'react';
import PropTypes from 'prop-types'

import {BottomnContainer} from './components/bottom_container';
import {H1} from '../../components/h1';
import {H3} from '../../components/h3';
import {MiddleContainer} from './components/middle_container';
import {TitleContainer} from './components/title_container';
import {TopContainer} from './components/top_container';

/**
 * Cover section component
 * @param {string} name 
 * @param {string} title 
 */
export const Cover = ({name, title}) => {
  return (
    <div id='cover'>
      <TopContainer />
      <MiddleContainer>
        <TitleContainer>
          <H1>{name}</H1>
          <H3>{title}</H3>
        </TitleContainer>
      </MiddleContainer>
      <BottomnContainer />
    </div>
  );
}

Cover.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
