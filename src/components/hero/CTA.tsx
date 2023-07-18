import React from "react";
import CV from "../../assets/Maksym_Stoliar__Front-end.pdf";
import styled from "styled-components";
import { Link } from "../shared/Link";

export const CTA: React.FC = () => {
  return (
    <Wrap>
      <Link variant="secondary" href={CV} download>
        Download CV
      </Link>
      <Link variant="primary" href="">
        Contact me
      </Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 2.5rem;
  display: inline-flex;
  gap: 15px;
`;
