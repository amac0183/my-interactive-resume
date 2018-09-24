import React from 'react';
import ReactDOM from 'react-dom';

import {DATA} from './data';
import {ContactSection} from './sections/contact/index.jsx';
import {Cover} from './sections/cover/index.jsx';
import {ExperiencesSection} from './sections/experiences/index.jsx';
import {ProfileSection} from './sections/profile/index.jsx';
import {SkillsSection} from './sections/skills/index.jsx';

import '../sass/index.scss'

const Index = () => {
  return (
    <div>
      <Cover {...DATA.cover} />
      <div className='sections-container'>
        <ProfileSection />
        <SkillsSection {...DATA.skills} />
        <ExperiencesSection {...DATA.experiences} />
        <ContactSection />
      </div>
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById('index'));