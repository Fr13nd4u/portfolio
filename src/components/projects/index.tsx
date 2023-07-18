import * as React from "react";
import styled from "styled-components";

export const Projects: React.FC = () => {
  return <ProjectsWrap id="projects">Projects</ProjectsWrap>;
};

const ProjectsWrap = styled.section`
  width: 100%;
  height: 80vh;
  // background: #9ee37d;
`;
