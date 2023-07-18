import * as React from "react";
import styled from "styled-components";

import { CTA } from "./CTA";
import img_me from "../../assets/me.png";

export const Hero: React.FC = () => {
  return (
    <HeroWrap id="hero">
      <Content>
        <h5>Hello, I`m</h5>
        <h1>Maksym Stoliar</h1>
        <h3>Frontend Developer</h3>

        <CTA />
      </Content>
    </HeroWrap>
  );
};

const HeroWrap = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
`;

const Content = styled.div`
  text-align: center;
  height: 100%;

  h1 {
    font-size: 38px;
  }
`;
