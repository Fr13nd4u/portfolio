import * as React from "react";
import styled from "styled-components";

import { CTA } from "./CTA";
import { Link } from "../shared/Link";
import { Socials } from "./Socials";

import img_me from "../../assets/me.png";
import { theme } from "../../styles/theme";
import { media } from "../../styles/mixins";

export const Hero: React.FC = () => {
  return (
    <HeroWrap id="hero">
      <h5>Hello, I`m</h5>
      <h1>Maksym Stoliar</h1>
      <h3>Frontend Developer</h3>

      <CTA />

      <ScrollDown variant="outline" href="#contact">
        Scroll Down
      </ScrollDown>

      <Socials />
      <ImgWrap>
        <img src={img_me} alt="me" />
      </ImgWrap>
    </HeroWrap>
  );
};

const HeroWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 3rem;

  text-align: center;
  height: 100%;
  position: relative;

  h1 {
    font-size: 38px;
  }
`;

const ScrollDown = styled(Link)`
  display: none;

  ${media.md`
    font-weight: 300;
    display: block;
    position: absolute;
    right: -1.3rem;
    bottom: 5.5rem;
    transform: rotate(90deg);
  `}
`;

const ImgWrap = styled.div`
  background: ${theme.main.gradients.primary};
  width: 18rem;
  height: 30rem;
  margin: 2rem auto 0;
  border-radius: 10rem 10rem 0px 0px;
  overflow: hidden;
  padding: 3.5rem 1rem 1rem;

  img {
    width: 100%;
  }

  ${media.sm` 
    width: 20rem;
  `}
`;
