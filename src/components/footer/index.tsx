import * as React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return <FooterWrap id="footer">Footer</FooterWrap>;
};

const FooterWrap = styled.footer`
  width: 100%;
  min-height: 10vh;
  background: #aaefdf;
`;
