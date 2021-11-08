import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row noPadding>
<LeftSection>
  <SectionTitle main center>
    WelCome to <br/>
    My Personal Portfolio
  </SectionTitle>
  <SectionText>
    my name is hasaan ahmed
  </SectionText>
  <Button onClick={() => Window.location ="https://www.google.com"}>learn more</Button>
</LeftSection>
</Section>
);

export default Hero;