import * as React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { IProject } from "../../constants/projects";
import Image from "../shared/Image";

interface CardProps {
  project: IProject;
}

const CaseStudyCard: React.FC<CardProps> = ({ project }) => {
  return (
    <Card>
      <Image photo={project.photo} />
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export default CaseStudyCard;
