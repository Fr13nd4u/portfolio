import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixins";

interface IContainer {
  children: React.ReactNode;
}
export const Container: React.FC<IContainer> = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

const ContainerWrap = styled.div`
  width: 90%;
  margin: 0 auto;

  ${media.md`
    width: 86%;
  `}

  ${media.lg`
    width: 80%;
  `}

  ${media.xl`
    width: 75%;
  `}
`;
