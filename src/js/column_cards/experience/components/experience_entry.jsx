import moment from 'moment';
import React from 'react';
import {PropTypes} from 'prop-types';
import {Container} from './container';
import {H3} from '../../../components/h3';
import {H4} from '../../../components/h4';
import {H5} from '../../../components/h5';

export const ExperienceEntry = ({company, endDate, position, startDate}) => (
  <Container>
    <H3>
      {moment(startDate, 'YYYYMMDD').format('MMM \'YY')} - {
        endDate 
          ? moment(endDate, 'YYYYMMDD').format('MMM \'YY')
          : 'Present'
      }
    </H3>
    <H4>{company}</H4>
    <H5>{position}</H5>
  </Container>
);

ExperienceEntry.propTypes = {
  company: PropTypes.string.isRequired,
  endDate: PropTypes.number,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
};
