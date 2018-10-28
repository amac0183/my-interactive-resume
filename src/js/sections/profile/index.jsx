import React from 'react';
import PropTypes from 'prop-types'
import {BaseSection} from '../base_section/index.jsx'
import profile from '../../../img/profile.jpg'

export const ProfileSection = ({bio, location, name}) => {
  return (
    <div id='profile'>
      <BaseSection title='Profile'>
        <div className='content'>
          <div className='basic-info-photo'>
            <div className='photo'>
              <img src={profile} />
            </div>
            <div className='basic-info'>
              <h3>{name}</h3>
              <div className='location'>
                <i class='material-icons'>location_on</i> {location}
              </div>
            </div>
          </div>
          <div>
            {bio}
          </div>
        </div>
      </BaseSection>
    </div>
  );
}

ProfileSection.propTypes = {
  bio: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
