import React from 'react';
import {styled} from 'linaria/react';
import PropTypes from 'prop-types'

import {H1} from './h1';
import {H3} from './h3';

export const BottomnContainer = styled.div`
  background-color: white;
  height: 10rem;
`;

export const MiddleContainer = styled.div`
  background-color: transparent;
  height: 20rem;
`;

export const TitleContainer = styled.div`
  color: white;
  margin-top: 6rem;
  text-align: center;
  width: 100%;
`;

export const TopContainer = styled.div`
  background-color: white;
  height: 10rem;
`;

export const CoverContainer = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

/**
 * Main title component
 * @param {string} name 
 * @param {string} title 
 */
export const MainTitle = ({name, title}) => {
  return (
    <CoverContainer id='cover'>
      <TopContainer />
      <MiddleContainer>
        <TitleContainer>
          <H1 inverted>{name}</H1>
          <H3 inverted>{title}</H3>
        </TitleContainer>
      </MiddleContainer>
      <BottomnContainer />
    </CoverContainer>
  );
}

MainTitle.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
