import React from 'react';
import PropTypes from 'prop-types';
import {styled} from 'linaria/react';

const CardContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  min-height: 50rem;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 25rem;

  @media only screen and (max-width: 500px) {
    min-height: 10rem;
    flex-basis: 100%;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding: 0.938rem;
`;

export const ColumnCard = ({backgroundColor, children}) => (
  <CardContainer backgroundColor={backgroundColor}>
    <ContentContainer>
      {children}
    </ContentContainer>
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
