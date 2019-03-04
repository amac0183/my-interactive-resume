import React from 'react';
import PropTypes from 'prop-types';
import {styled} from 'linaria/react';
import {SkillLevelMeter} from './skill_level_meter.jsx';
import {H3} from '../../../components/h3';
import {H5} from '../../../components/h5';

export const Container = styled.div`
  margin-bottom: 1.25rem;
  width: 100%;
`;

const Table = styled.table`
  color: white;
  width: 100%;
`;

const NameTD = styled.td`
  width: 50%;
  text-align: left;
`;

const RatingTD = styled.td`
  width: 50%;
  text-align: right;
`;

export const SkillCategorySection = ({skillTypes, title}) => (
  <Container>
    <H3 inverted>{title}</H3>
    <div>
      <Table>
        <tbody>
          {
            skillTypes.map((type, index) => (
              <tr key={`skill-row-${index}`}>
                <NameTD><H5 inverted>{type.name}</H5></NameTD>
                <RatingTD>
                  <SkillLevelMeter level={type.level || 1} />
                </RatingTD>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  </Container>
);

SkillCategorySection.propTypes = {
  skillTypes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
