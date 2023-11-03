import * as React from "react";
import CaseStudyCard from "./CaseStudyCard";

import styled from "styled-components";
import { theme } from "../../styles/theme";
import { projects } from "../../constants/projects";

const CaseStudyList: React.FC = () => {
  return (
    <ListWrap>
      {projects.map((project) => (
        <CaseStudyCard project={project} key={project.id} />
      ))}
    </ListWrap>
  );
};

const ListWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

export default CaseStudyList;
