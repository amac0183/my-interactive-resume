import React from 'react'
import PropTypes from 'prop-types'
import {styled} from 'linaria/react';
import {A} from '../../../components/a';
import {H3} from '../../../components/h3';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconContainer = styled.span`
  font-size: 24pt;
  margin: 0.3rem;
`;

export const ContactLink = ({icon, openInNewTab, url}) => (
  <Container>
    <A href={url} target={openInNewTab ? '_blank' : ''}>
      <H3 inverted>
        <IconContainer>{icon}</IconContainer>
      </H3>
    </A>
  </Container>
)

ContactLink.defaultProps = {
  openInNewTab: false
}

ContactLink.propTypes = {
  icon: PropTypes.element.isRequired,
  openInNewTab: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
}
