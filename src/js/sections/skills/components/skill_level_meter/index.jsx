import _ from 'lodash'
import React from 'react'

const MAX_RATING = 5

const createMeter = (level) => {
  const elems = _.range(level).map(() => (
    <i class='material-icons'>grade</i>
  ));

  const diff = MAX_RATING - level;
  if(diff > 0) {
    _.forEach(_.range(diff), (index) => {
      elems.push(<i class='material-icons disabled'>grade</i>);
    });
  }

  return elems;
}

export const SkillLevelMeter = ({level}) => (
  <span className='skill-level-meter'>
    {
      createMeter(level)
    }
  </span>
)
