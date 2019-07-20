import {PropTypes} from 'prop-types'
import {styled} from 'linaria/react';

export const H1 = styled.h1`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-size: 42pt;
  font-weight: bold;
  margin: 0px;

  @media only screen and (max-width: 500px) {
    font-size: 36pt;
  }
`;

H1.defaultProps = {
  inverted: false
};

H1.propTypes = {
  inverted: PropTypes.bool.isRequired
};
