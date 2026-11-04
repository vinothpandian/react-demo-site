import React from 'react';
import InfoCard from './InfoCard';
import SectionTitle from '../../SectionTitle';

import intellect from '../../../Assets/intellect.png';
import stealth from '../../../Assets/stealth.png';
import rich from '../../../Assets/rich.png';

const Skills = () => (
  <div className="skill-deck pb-5">
    <SectionTitle title="Skills" />
    <InfoCard title="Supreme Intellect" image={intellect} />
    <InfoCard title="Stealth Warrior" image={stealth} />
    <InfoCard title="Super Rich" image={rich} />
  </div>
);

export default Skills;
