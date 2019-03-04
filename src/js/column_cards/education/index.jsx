import React from 'react';
import PropTypes from 'prop-types';
import {CardTitle} from '../../components/card_title';
import {ColumnCard} from '../../components/column_card';
import {Divider} from '../../components/divider';
import {EducationEntry} from './components/education_entry';
import {H2} from '../../components/h2';

export const EducationCard = ({education}) => (
  <ColumnCard>
    <CardTitle title='Education' />
    <div>
      {education.map((school, index) => (
        <EducationEntry key={`education-${index}`} {...school} />
      ))}
    </div>
  </ColumnCard>
);

EducationCard.defaultProps = {
  education: []
};

EducationCard.propTypes = {
  education: PropTypes.array.isRequired
};
