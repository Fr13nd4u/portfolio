import React from "react";
import { AboutCard } from "./AboutCard";
import styled from "styled-components";
import { media } from "../../styles/mixins";

export const AboutCardContainer: React.FC = () => {
  return (
    <CardsWrap>
      <AboutCard title="Main Stack">
        <p>HTML, CSS</p>
        <p>JavaScript, TypeScript</p>
        <p>React, Redux</p>
      </AboutCard>
      <AboutCard title="Languages">
        <p>Ukraine – Native</p>
        <p>English – B1</p>
      </AboutCard>

      <AboutCard title="Education">
        <h5>Taras Shevchenko National University of Kyiv </h5>
        <p>Faculty of Information Technology, Software engineering</p>
        <p>September 2017 – July 2021</p>
      </AboutCard>
      <AboutCard title="Courses">
        <h5>DanIT Education</h5>
        <p>Frontend course</p>
        <p>April 2018 – July 2019</p>
      </AboutCard>
    </CardsWrap>
  );
};

const CardsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1.5rem;

  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `}
`;
