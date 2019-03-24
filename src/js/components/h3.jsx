import {PropTypes} from 'prop-types'
import {styled} from 'linaria/react';

export const H3 = styled.h3`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-size: 24pt;
  font-weight: bold;
  margin: 0px;

  @media (max-width: 500px) {
    font-size: 10pt;
  }
`;

H3.defaultProps = {
  inverted: false
};

H3.propTypes = {
  inverted: PropTypes.bool.isRequired
};
