import * as React from "react";
import styled from "styled-components";

export const Projects: React.FC = () => {
  return <ProjectsWrap id="projects">projects</ProjectsWrap>;
};

const ProjectsWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0px;
`;
