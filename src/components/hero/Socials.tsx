import React from "react";
import styled, { css } from "styled-components";
import { Link } from "../shared/Link";
import { BsGithub, BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";
import { media } from "../../styles/mixins";
import { theme } from "../../styles/theme";

export const Socials: React.FC = () => {
  return (
    <SocialsWrap>
      <li>
        <Link
          variant="outline"
          href="https://github.com/Fr13nd4u"
          target="_blank"
        >
          <BsGithub />
        </Link>
      </li>
      <li>
        <Link
          variant="outline"
          href="https://www.linkedin.com/in/maksym-s-b08270191"
          target="_blank"
        >
          <BsLinkedin />
        </Link>
      </li>
      <li>
        <Link variant="outline" href="https://t.me/fr13ND4u" target="_blank">
          <BsTelegram />
        </Link>
      </li>
      <li>
        <Link
          variant="outline"
          href="https://twitter.com/Fr13nd4u"
          target="_blank"
        >
          <BsTwitter />
        </Link>
      </li>
    </SocialsWrap>
  );
};

const SocialsWrap = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  ${media.md`
    ${() => css`
      flex-direction: column;
      position: absolute;
      left: 0;
      bottom: 3.5rem;

      &::after {
        content: "";
        width: 1px;
        height: 3rem;
        background: ${theme.main.colors.secondary};
      }
    `}
  `}
`;
