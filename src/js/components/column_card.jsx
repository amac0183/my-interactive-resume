import React from 'react';
import PropTypes from 'prop-types';
import {styled} from 'linaria/react';

const CardContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  max-width: 25.938rem;
  min-height: 50rem;
  min-width: 25rem;
  padding: 0.938rem;
`;

export const ColumnCard = ({backgroundColor, children}) => (
  <CardContainer backgroundColor={backgroundColor}>
    {children}
  </CardContainer>
);

ColumnCard.defaultProps = {
  backgroundColor: 'white'
};

ColumnCard.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};
