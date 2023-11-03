import * as React from "react";
import CaseStudyList from "./CaseStudyList";
import { Container } from "../shared/Container";

import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Projects: React.FC = () => {
  return (
    <ProjectsWrap id="projects">
      <Container>
        <h5>My works</h5>
        <h2>Portfolio</h2>
        <CaseStudyList />
      </Container>
    </ProjectsWrap>
  );
};

const ProjectsWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0px;

  text-align: center;

  h2 {
    color: ${theme.main.colors.secondary};
  }
`;
