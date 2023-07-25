import * as React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ICard {
  title: string;
  children?: React.ReactNode;
}

export const Card: React.FC<ICard> = ({ title, children }) => {
  return (
    <CardWrap>
      <h3>{title}</h3>
      {children}
    </CardWrap>
  );
};

const CardWrap = styled.div`
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  background: ${theme.main.opacities.tertiary_light};
  backdrop-filter: blur(15px);

  text-align: left;
  z-index: 1;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${theme.main.colors.secondary};
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem !important;
    line-height: 1.1 !important;
  }
`;
