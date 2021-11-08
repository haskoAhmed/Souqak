import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider /> 
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    react js npm react router git
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="2rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="2rem" />
      <ListContainer>
        <ListTitle>Html 5</ListTitle>
        <ListParagraph>
          Experience with <br/>
    html
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="2rem" />
      <ListContainer>
        <ListTitle>css3</ListTitle>
        <ListParagraph>
          Experience with <br/>
          css
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  
</Section>
);

export default Technologies;
