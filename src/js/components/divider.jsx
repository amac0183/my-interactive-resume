import {PropTypes} from 'prop-types'
import {styled} from 'linaria/react';

export const Divider = styled.div`
  background-color: ${props => props.inverted ? 'white' : 'black'};
  height: 0.325rem;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  width: 100%
  
  @media only screen and (max-width: 500px) {
    height: 0.2rem;
  }
`;

Divider.defaultProps = {
  inverted: false
};

Divider.propTypes = {
  inverted: PropTypes.bool.isRequired
};
