import * as React from "react";
import styled from "styled-components";

import img_me from "../../assets/me.png";

export const Hero: React.FC = () => {
  return (
    <HeroWrap id="hero">
      <h1>Hero</h1>
      <img src={img_me} alt="me" />
    </HeroWrap>
  );
};

const HeroWrap = styled.section`
  width: 100%;
  height: 100vh;
  // background: #cffcff;
`;
