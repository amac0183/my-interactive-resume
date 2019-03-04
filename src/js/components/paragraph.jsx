import {PropTypes} from 'prop-types'
import {styled} from 'linaria/react';

export const P = styled.p`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-size: 10pt;
  font-weight: light;

  @media (max-width: 500px) {
    font-size: 10pt;
  }
`;

P.defaultProps = {
  inverted: false
};

P.propTypes = {
  inverted: PropTypes.bool.isRequired
};
