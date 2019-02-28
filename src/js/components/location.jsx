import React from 'react';
import PropTypes from 'prop-types'
import {styled} from 'linaria/react';
import {H5} from './h5'

const LocationContainer = styled.div`
  display: flex;
  margin-top: 0.313rem;

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;

const IconContainer = styled.span`
  font-size: 12pt;
  margin-right: 0.625rem;
`;

export const Location = ({location}) => (
  <LocationContainer>
    <IconContainer><i class='material-icons'>location_on</i></IconContainer> <H5>{location}</H5>
  </LocationContainer>
)

Location.propTypes = {
  location: PropTypes.string.isRequired
}
