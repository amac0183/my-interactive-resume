import React from 'react';
import PropTypes from 'prop-types';
import {CardTitle} from '../../components/card_title';
import {ColumnCard} from '../../components/column_card';
import {Divider} from '../../components/divider';
import {H2} from '../../components/h2';
import {SkillCategoryContainer} from './components/skill_category_container';
import {SkillCategorySection} from './components/skill_category_section';

export const SkillsCard = ({databases, javascriptLibraries, languages, tools}) => (
  <ColumnCard backgroundColor='#7a7a7d'>
    <CardTitle inverted title='Skills' />
    <SkillCategoryContainer>
      <SkillCategorySection skillTypes={languages} title='Languages' />
      <SkillCategorySection skillTypes={javascriptLibraries} title='JavaScript Libraries' />
      <SkillCategorySection skillTypes={databases} title='Databases' />
      <SkillCategorySection skillTypes={tools} title='Tools' />
    </SkillCategoryContainer>
  </ColumnCard>
);

SkillsCard.propTypes = {
  databases: PropTypes.array.isRequired,
  javascriptLibraries: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired
};
