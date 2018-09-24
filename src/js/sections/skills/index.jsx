import React from 'react';
import PropTypes from 'prop-types'
import {BaseSection} from '../base_section/index.jsx';
import {SkillTypeSection} from './components/skill_type_section/index.jsx'

export const SkillsSection = ({databases, javascriptLibraries, languages, tools }) => {
  console.log(languages)
  return (
    <div id='skills'>
      <BaseSection title='Skills'>
        <div className='skill-container'>
          <SkillTypeSection skillTypes={languages} title='Languages' />
          <SkillTypeSection skillTypes={javascriptLibraries} title='JavaScript Libraries' />
          <SkillTypeSection skillTypes={databases} title='Databases' />
          <SkillTypeSection skillTypes={tools} title='Tools' />
        </div>
      </BaseSection>
    </div>
  );
}