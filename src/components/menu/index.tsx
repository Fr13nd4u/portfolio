import * as React from "react";
import styled from "styled-components";

export const Menu: React.FC = () => {
  return <HeaderWrap id="menu">Menu</HeaderWrap>;
};

const HeaderWrap = styled.menu`
  width: 100%;
  height: 10vh;
  // position: fixed;
  background: #aaefdf;
`;
