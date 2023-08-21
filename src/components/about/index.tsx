import * as React from "react";
import styled from "styled-components";

import img_me from "../../assets/me.png";
import { theme } from "../../styles/theme";
import { media } from "../../styles/mixins";
import { Container } from "../shared/Container";
import { AboutCardContainer } from "./AboutCardContainer";

export const About: React.FC = () => {
  return (
    <AboutWrap id="about">
      <Container>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <Content>
          <ImgWrap />
          <Blob />
          <ContentBody>
            <p>
              In addition to being a passionate and skilled front-end developer
              based in Zhytomyr, Ukraine, I have two years of professional
              experience in crafting engaging and user-friendly web applications
              using cutting-edge technologies.
            </p>
            <p>
              With a strong foundation in HTML, CSS, and JavaScript, I have
              expanded my skillset to include React, Redux, TypeScript, and
              more.
            </p>
            <p>
              Let me take you on a journey through my career and educational
              experiences.
            </p>

            <AboutCardContainer />
          </ContentBody>
        </Content>
      </Container>
    </AboutWrap>
  );
};

const AboutWrap = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  overflow: hidden;

  text-align: center;
  height: 100%;

  h2 {
    color: ${theme.main.colors.secondary};
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  ${media.md`
    margin-top: 1rem;
  `}

  ${media.lg`
    margin-top: 2rem;
  `}
`;

const ContentBody = styled.div`
  p {
    text-align: left;
    font-size: 18px;
    line-height: 1.7;
  }

  ${media.lg`
    width: 50%
  `}
`;

const ImgWrap = styled.div`
  z-index: 1;
  display: none;
  background-image: url(${img_me});
  background-color: ${theme.main.colors.bg};
  background-position: 50% top;
  background-size: cover;

  height: 26rem;
  width: 26rem;
  margin: 5rem 0;

  border: 2px solid ${theme.main.colors.secondary};
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  transition: all 1s ease-in-out;

  animation: morph 8s ease-in-out infinite;

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  ${media.lg`
    display: block;
  `}
`;

const Blob = styled.div`
  position: absolute;
  height: 26rem;
  width: 26rem;

  background: ${theme.main.gradients.blob};
  mix-blend-mode: exclusion;
  transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);

  transform: translate(10px, 650px) rotate(-90deg);
  border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
  box-shadow: ${theme.main.shadows.blob};
  -webkit-filter: blur(30px);
  filter: blur(30px);

  &:hover {
    height: 27rem;
    width: 27rem;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    box-shadow: ${theme.main.shadows.blob};
  }

  ${media.md`
    box-shadow: none;
    -webkit-filter: none;
    filter: none;

    -webkit-animation: move 25s infinite alternate;
    animation: move 25s infinite alternate;
  `}

  @keyframes move {
    from {
      transform: translate(1100px, 50px) rotate(-90deg);
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
      transform: translate(5px, 350px) rotate(-10deg);
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
  }
`;
