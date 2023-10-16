import * as React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ICard {
  title: string;
  children?: React.ReactNode;
}

export const AboutCard: React.FC<ICard> = ({ title, children }) => {
  return (
    <CardWrap>
      <h3>{title}</h3>
      {children}
    </CardWrap>
  );
};

const CardWrap = styled.div`
  flex-grow: 1;
  flex-basis: 300px;

  border-radius: 1rem;
  padding: 1rem 1.5rem;
  border: 1px solid ${theme.main.opacities.tertiary_dark};
  background: ${theme.main.opacities.tertiary_light};
  backdrop-filter: blur(15px);

  text-align: center;
  z-index: 1;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${theme.main.colors.secondary};
  }

  h5 {
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    text-align: center !important;
    font-size: 0.9rem !important;
    line-height: 1.1 !important;
  }
`;
