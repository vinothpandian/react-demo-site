import React from 'react';
import { Row } from 'reactstrap';
import InfoCard from './InfoCard';
import SectionTitle from '../../SectionTitle';

const intellect = require('../../../Assets/intellect.png');
const stealth = require('../../../Assets/stealth.png');
const rich = require('../../../Assets/rich.png');

const Skills = () => (
  <Row className="pb-5">
    <SectionTitle title="Skills" />
    <InfoCard title="Supreme Intellect">
      <img src={intellect} width="128" alt="logo" />
    </InfoCard>
    <InfoCard title="Stealth Warrior">
      <img src={stealth} width="128" alt="logo" />
    </InfoCard>
    <InfoCard title="Super Rich">
      <img src={rich} width="128" alt="logo" />
    </InfoCard>
  </Row>
);

export default Skills;
