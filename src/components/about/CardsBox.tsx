import React from "react";
import { Card } from "./Card";
import styled from "styled-components";
import { media } from "../../styles/mixins";

export const CardsBox: React.FC = () => {
  return (
    <CardsWrap>
      <Card title="Main Stack">
        <p>HTML, CSS</p>
        <p>JavaScript, TypeScript</p>
        <p>React, Redux</p>
      </Card>
      <Card title="Languages">
        <p>Ukraine – Native</p>
        <p>English – B1</p>
      </Card>

      <Card title="Education">
        <h5>Taras Shevchenko National University of Kyiv </h5>
        <p>Faculty of Information Technology, Software engineering</p>
        <p>September 2017 – July 2021</p>
      </Card>
      <Card title="Courses">
        <h5>DanIT Education</h5>
        <p>Frontend course</p>
        <p>April 2018 – July 2019</p>
      </Card>
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
