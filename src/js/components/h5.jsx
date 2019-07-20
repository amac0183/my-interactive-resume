import {PropTypes} from 'prop-types'
import {styled} from 'linaria/react';

export const H5 = styled.h5`
  color: ${props => props.inverted ? 'white' : 'black'};
  font-family: Montserrat;
  font-size: 14pt;
  font-weight: bold;
  margin: 0px;

  @media (max-width: 500px) {
    font-size: 12pt;
  }
`;

H5.defaultProps = {
  inverted: false
};

H5.propTypes = {
  inverted: PropTypes.bool.isRequired
};
