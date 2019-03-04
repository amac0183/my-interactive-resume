import React from 'react';
import PropTypes from 'prop-types'
import {styled} from 'linaria/react';
import {H5} from './h5'

const LocationContainer = styled.div`
  color: ${props => props.inverted ? 'white' : 'black'};
  display: flex;
  margin-top: 0.313rem;

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;

LocationContainer.propTypes = {
  inverted: PropTypes.bool.isRequired
}

const IconContainer = styled.span`
  font-size: 12pt;
  margin-right: 0.625rem;
`;

export const Location = ({inverted, location}) => (
  <LocationContainer inverted>
    <IconContainer><i class='material-icons'>location_on</i></IconContainer>{' '}
    <H5 inverted>{location}</H5>
  </LocationContainer>
)

Location.defaultProps = {
  inverted: false
}

Location.propTypes = {
  inverted: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired
}
