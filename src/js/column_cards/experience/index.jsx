import React from 'react';
import PropTypes from 'prop-types';
import {ColumnCard} from '../../components/column_card';
import {Divider} from '../../components/divider';
import {ExperienceEntry} from './components/experience_entry';
import {H2} from '../../components/h2';

export const ExperienceCard = ({work}) => (
  <ColumnCard>
    <H2>Work Experience</H2>
    <Divider />
    <div>
      {work.map(experience => (
        <ExperienceEntry {...experience} />
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
