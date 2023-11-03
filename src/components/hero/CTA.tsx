import React from "react";
import CV from "../../assets/Maksym_Stoliar__Front-end.pdf";
import styled, { css } from "styled-components";
import { Link, LinkStyles } from "../shared/Link";
import { media } from "../../styles/mixins";

export const CTA: React.FC = () => {
  return (
    <Wrap>
      <Link variant="primary" href={CV} download animated>
        Download CV
      </Link>
      <Link variant="secondary" href="#contact">
        Contact me
      </Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 2.5rem;
  display: inline-flex;
  gap: 0.5rem;

  ${LinkStyles} {
    min-width: 140px;
    font-size: 14px;
  }

  ${media.sm`
    ${() => css`
      gap: 1rem;

      ${LinkStyles} {
        min-width: 150px;
        font-size: inherit;
      }
    `}
  `}
`;
