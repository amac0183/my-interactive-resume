import React from 'react';
import {PropTypes} from 'prop-types';
import {styled} from 'linaria/react';
import {H2} from './h2';

const Container = styled.div`
  padding-bottonm: 1.25rem;
`;

const Divider = styled.div`
  background-color: ${props => props.inverted ? 'white' : 'black'};
  height: 0.425rem;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  width: 100%
`;

export const CardTitle = ({inverted, title}) => (
  <Container>
    <H2 inverted>Profile</H2>
    <Divider inverted />
  </Container>
);

CardTitle.defaultProps = {
  inverted: false,
  title: 'Title Needed!'
};

CardTitle.propTypes = {
  inverted: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};
