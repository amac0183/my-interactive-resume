import {PropTypes} from 'prop-types'
import {styled} from 'linaria/react';

export const H4 = styled.h4`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-size: 18pt;
  font-weight: bold;
  margin: 0px;

  @media (max-width: 500px) {
    font-size: 9pt;
  }
`;

H4.defaultProps = {
  inverted: false
};

H4.propTypes = {
  inverted: PropTypes.bool.isRequired
};
