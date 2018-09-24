import React from 'react'
import PropTypes from 'prop-types'
import {SkillLevelMeter} from '../skill_level_meter/index.jsx'

export const SkillTypeSection = ({skillTypes, title}) => (
  <div className='skill-type-selector-component'>
    <h3>{title}</h3>
    <div>
      <table>
        <tbody>
          {
            skillTypes.map((type) => (
              <tr className='skill-type-row'>
                <td className='skill-type-name'>{type.name}</td>
                <td className='skill-type-level'>
                  <SkillLevelMeter level={type.level || 1} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
)

SkillTypeSection.propTypes = {
  skillTypes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}
