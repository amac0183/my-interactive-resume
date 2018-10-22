import React from 'react'
import PropTypes from 'prop-types'

export const ContactEntry = ({icon, openInNewTab, url}) => (
  <div className='contact-entry-component'>
    <a href={url} target={openInNewTab ? '_blank' : ''}>
      <h3>
        <span className='icon-container'>{icon}</span>
      </h3>
    </a>
  </div>
)

ContactEntry.defaultProps = {
  openInNewTab: false
}

ContactEntry.propTypes = {
  icon: PropTypes.element.isRequired,
  openInNewTab: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
}