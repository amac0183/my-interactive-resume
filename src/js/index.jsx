import React from 'react';
import ReactDOM from 'react-dom';

import {Background} from './components/background';
import {Cover} from './sections/cover/index';
import {EducationCard} from './column_cards/education';
import {ExperienceCard} from './column_cards/experience';
import {ProfileCard} from './column_cards/profile';
import {SkillsCard} from './column_cards/skills';
import {DATA} from './data';

/**
 * Top level container component
 */
const Index = () => {
  return (
    <Background>
      <Cover {...DATA.cover} />
      <div className='column-card-container'>
        <ProfileCard {...DATA.profile} />
        <ExperienceCard {...DATA.experiences} />
        <EducationCard {...DATA.experiences} />
        <SkillsCard {...DATA.skills} />
      </div>
    </Background>
  )
};

ReactDOM.render(<Index />, document.getElementById('index'));
