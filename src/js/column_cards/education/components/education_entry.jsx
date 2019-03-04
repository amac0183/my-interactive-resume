import moment from 'moment';
import React from 'react';
import {PropTypes} from 'prop-types';
import {Container} from './container';
import {H3} from '../../../components/h3';
import {H4} from '../../../components/h4';
import {H5} from '../../../components/h5';

export const EducationEntry = ({degree, graduationDate, school}) => (
  <Container>
    <H3>
      {moment(graduationDate, 'YYYYMMDD').format('MMM \'YY')}
    </H3>
    <H4>{school}</H4>
    <H5>{degree}</H5>
  </Container>
);

EducationEntry.propTypes = {
  degree: PropTypes.string.isRequired,
  graduationDate: PropTypes.number,
  school: PropTypes.string.isRequired
};
