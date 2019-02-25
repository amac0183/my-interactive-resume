import React from 'react';
import ReactDOM from 'react-dom';

import {Background} from './components/background'
import {Cover} from './sections/cover/index';
import {DATA} from './data';
/* import {ContactSection} from './sections/contact/index.jsx';

import {ExperiencesSection} from './sections/experiences/index.jsx';
import {ProfileSection} from './sections/profile/index.jsx';
import {SkillsSection} from './sections/skills/index.jsx'; */

/**
 * Top level container component
 */
const Index = () => {
  return (
    <Background>
      <Cover {...DATA.cover} />
      <div className='sections-container' />
    </Background>
  )
};

ReactDOM.render(<Index />, document.getElementById('index'));

/*
        <ProfileSection {...DATA.profile} />
        <SkillsSection {...DATA.skills} />
        <ExperiencesSection {...DATA.experiences} />
        <ContactSection />
*/
