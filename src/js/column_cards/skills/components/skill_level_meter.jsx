import _ from 'lodash';
import React from 'react';
import {styled} from 'linaria/react';

const MAX_RATING = 5

const EmptyStar = styled.span`
  color: gray;
`;

const createMeter = (level) => {
  const elems = _.range(level).map(() => (
    <i class='material-icons'>grade</i>
  ));

  const diff = MAX_RATING - level;
  if(diff > 0) {
    _.forEach(_.range(diff), (index) => {
      elems.push(<EmptyStar><i class='material-icons disabled'>grade</i></EmptyStar>);
    });
  }

  return elems;
};

export const SkillLevelMeter = ({level}) => (
  <span>
    {
      createMeter(level)
    }
  </span>
);
