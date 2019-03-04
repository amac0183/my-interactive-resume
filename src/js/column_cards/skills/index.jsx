import React from 'react';
import PropTypes from 'prop-types';
import {ColumnCard} from '../../components/column_card';
import {Divider} from '../../components/divider';
import {H2} from '../../components/h2';
import {SkillCategoryContainer} from './components/skill_category_container';
import {SkillCategorySection} from './components/skill_category_section';

export const SkillsCard = ({databases, javascriptLibraries, languages, tools}) => (
  <ColumnCard backgroundColor='#7a7a7d'>
    <H2 inverted>Skills</H2>
    <Divider inverted />
    <SkillCategoryContainer>
      <SkillCategorySection skillTypes={languages} title='Languages' />
      <SkillCategorySection skillTypes={javascriptLibraries} title='JavaScript Libraries' />
      <SkillCategorySection skillTypes={databases} title='Databases' />
      <SkillCategorySection skillTypes={tools} title='Tools' />
    </SkillCategoryContainer>
  </ColumnCard>
);

SkillsCard.defaultProps = {
  work: []
};

SkillsCard.propTypes = {
  databases: PropTypes.array.isRequired,
  javascriptLibraries: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired
};
