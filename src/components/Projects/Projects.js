import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section noPadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
    
    {projects.map(({id, title ,image,visit,description,tags,source})=>( 
    <BlogCard key={id}>
      <Img src={image} />
      <TitleContent >
        <HeaderThree title>{title}</HeaderThree>
        <Hr/>
        <CardInfo>{description}</CardInfo>
      </TitleContent>
  <UtilityList>
    <ExternalLinks href={visit}>Code</ExternalLinks>
    <ExternalLinks href={source}>source</ExternalLinks>
  </UtilityList>

    </BlogCard>
    ))}
    </GridContainer>
  </Section>
);

export default Projects;
