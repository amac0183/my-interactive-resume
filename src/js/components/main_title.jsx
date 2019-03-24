import React from 'react';
import {styled} from 'linaria/react';
import PropTypes from 'prop-types'

import {H1} from './h1';
import {H3} from './h3';

export const BottomnContainer = styled.div`
  background-color: white;
  height: 5rem;

  @media (max-width: 500px) {
    height: 3rem;
  }
`;

export const MiddleContainer = styled.div`
  background-color: transparent;
  height: 8rem;

  @media (max-width: 500px) {
    height: 4rem;
  }
`;

export const TitleContainer = styled.div`
  color: white;
  margin-top: 2rem;
  text-align: center;
  width: 100%;

  @media (max-width: 500px) {
    margin-top: 0.5rem;
  }
`;

export const TopContainer = styled.div`
  background-color: white;
  height: 3rem;

  @media (max-width: 500px) {
    height: 1.5rem;
  }
`;

/**
 * Main title component
 * @param {string} name 
 * @param {string} title 
 */
export const MainTitle = ({name, title}) => {
  return (
    <div id='cover'>
      <TopContainer />
      <MiddleContainer>
        <TitleContainer>
          <H1 inverted>{name}</H1>
          <H3 inverted>{title}</H3>
        </TitleContainer>
      </MiddleContainer>
      <BottomnContainer />
    </div>
  );
}

MainTitle.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
