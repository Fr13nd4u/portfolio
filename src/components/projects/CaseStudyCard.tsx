import * as React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { IProject } from "../../constants/projects";
import Image from "../shared/Image";

interface CardProps {
  project: IProject;
}

const CaseStudyCard: React.FC<CardProps> = ({ project }) => {
  const { photo, name, description } = project;

  return (
    <Card>
      <Image photo={photo} />
      <CardInfo>
        <h4>{name}</h4>
        <p>{description}</p>
      </CardInfo>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`;

const CardInfo = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  background: ${theme.main.opacities.primary_dark};
  color: ${theme.main.colors.white};
`;

export default CaseStudyCard;
