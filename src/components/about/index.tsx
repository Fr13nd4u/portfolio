import * as React from "react";
import styled from "styled-components";

export const About: React.FC = () => {
  return <AboutWrap id="about">About</AboutWrap>;
};

const AboutWrap = styled.section`
  width: 100%;
  min-height: 80vh;
  // background: #aaefdf;
`;
