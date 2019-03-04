import React from 'react';
import PropTypes from 'prop-types';
import {BioContainer} from './components/bio_container';
import {CardTitle} from '../../components/card_title';
import {ColumnCard} from '../../components/column_card';
import {ContactLink} from './components/contact_link';
import {ContactLinksContainer} from './components/contact_links_container';
import {DetailsContainer} from './components/details_container';
import {Divider} from '../../components/divider';
import {Location} from '../../components/location';
import {P} from '../../components/paragraph';
import {PhotoContainer} from './components/photo_container';
import {PhotoImg} from './components/photo_img';
import profile from '../../../img/profile.jpg';

export const ProfileCard = ({bio, location}) => (
  <ColumnCard backgroundColor='#544b47'>
    <CardTitle inverted title='Profile' />
    <PhotoContainer>
      <PhotoImg src={profile} />
    </PhotoContainer>
    <Divider inverted />
    <BioContainer>
    <P inverted>{bio}</P>
    </BioContainer>
    <Divider inverted />
    <DetailsContainer>
      <Location location={location} />
    </DetailsContainer><DetailsContainer>
      <ContactLinksContainer>
        <ContactLink
          openInNewTab
          icon={<ion-icon name='logo-linkedin'/>}
          url='https://www.linkedin.com/in/andrew-hayakawa-a6043317'
        />
        <ContactLink
          openInNewTab
          icon={<ion-icon name='logo-twitter' />}
          url='https://twitter.com/AndrewIHayakawa'
        />
        <ContactLink
          icon={<i class="material-icons">mail</i>}
          url='mailto:isao.a.hayakawa@gmail.com'
        />
        <ContactLink
          openInNewTab
          icon={<ion-icon name='logo-github' />}
          url='https://github.com/amac0183'
        />
      </ContactLinksContainer>
    </DetailsContainer>
  </ColumnCard>
)

ProfileCard.propTypes = {
  bio: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}
