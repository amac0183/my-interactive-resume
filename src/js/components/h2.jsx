import {PropTypes} from 'prop-types'
import {styled} from 'linaria/react';

export const H2 = styled.h2`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-weight: bold;
  font-size: 36pt;
  margin: 0px;

  @media (max-width: 500px) {
    font-size: 16pt;
  }
`;

H2.defaultProps = {
  inverted: false
};

H2.propTypes = {
  inverted: PropTypes.bool.isRequired
};
