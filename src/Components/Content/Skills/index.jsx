import React from 'react';
import { CardDeck } from 'reactstrap';
import InfoCard from './InfoCard';
import SectionTitle from '../../SectionTitle';

const intellect = require('../../../Assets/intellect.png');
const stealth = require('../../../Assets/stealth.png');
const rich = require('../../../Assets/rich.png');

const Skills = () => (
  <CardDeck className="pb-5">
    <SectionTitle title="Skills" />
    <InfoCard title="Supreme Intellect" image={intellect} />
    <InfoCard title="Stealth Warrior" image={stealth} />
    <InfoCard title="Super Rich" image={rich} />
  </CardDeck>
);

export default Skills;
