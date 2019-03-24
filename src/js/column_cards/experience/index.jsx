import React from 'react';
import PropTypes from 'prop-types';
import {CardTitle} from '../../components/card_title';
import {ColumnCard} from '../../components/column_card';
import {ExperienceEntry} from './components/experience_entry';

export const ExperienceCard = ({work}) => (
  <ColumnCard backgroundColor='#F3C747'>
    <CardTitle title='Work Experience' />
    <div>
      {work.map((experience, index) => (
        <ExperienceEntry key={`experience-${index}`} {...experience} />
      ))}
    </div>
  </ColumnCard>
);

ExperienceCard.defaultProps = {
  work: []
};

ExperienceCard.propTypes = {
  work: PropTypes.array.isRequired
};
