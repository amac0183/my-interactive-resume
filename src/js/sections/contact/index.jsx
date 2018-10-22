import React from 'react';
import {BaseSection} from '../base_section/index.jsx';
import {ContactEntry} from './components/contact_entry/index.jsx';

export const ContactSection = () => {
  return (
    <div id='contact'>
      <BaseSection title='Contact'>
        <div className='contact-list'>
          <ContactEntry 
            openInNewTab
            icon={<ion-icon name='logo-linkedin'/>}
            url='http://www.linkedin.com/in/andrew-hayakawa-a6043317'
          />
          <ContactEntry
            icon={<i class="material-icons">mail</i>}
            url='mailto:isao.a.hayakawa@gmail.com'
          />
          <ContactEntry
            openInNewTab
            icon={<ion-icon name='logo-github' />}
            url='https://github.com/amac0183'
          />
        </div>
      </BaseSection>
    </div>
  );
}