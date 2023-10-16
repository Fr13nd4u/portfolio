import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ILink {
  children: React.ReactNode;
  variant: "outline" | "primary" | "secondary";
  href?: string;
  download?: boolean;
  disable?: boolean;
  animated?: boolean;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: React.FC<ILink> = ({
  children,
  variant,
  animated,
  ...props
}) => {
  if (animated) {
    return (
      <AnimatedLink variant={variant} {...props}>
        <span>{children}</span>
        <div></div>
      </AnimatedLink>
    );
  }

  return (
    <LinkWrap variant={variant} {...props}>
      {children}
    </LinkWrap>
  );
};

const LinkWrap = styled.a<ILink>`
  padding: 0.75rem 1.2rem;
  border-radius: 50px;
  font-weight: 500;
  min-width: 150px;

  ${(p) => {
    switch (p.variant) {
      case "primary":
        return `
          color: ${theme.main.colors.white};
          background: ${theme.main.colors.secondary};
          border: 1px solid ${theme.main.colors.secondary};
        `;

      case "secondary":
        return `
          color: ${theme.main.colors.secondary};
          border: 1px solid ${theme.main.colors.secondary};
        `;

      default:
        return `
          color: ${theme.main.colors.secondary};
        `;
    }
  }}
`;

const AnimatedLink = styled(LinkWrap)`
  position: relative;
  overflow: hidden;
  border: none;

  span {
    position: relative;
    z-index: 1;
  }

  div {
    position: absolute;
    top: -66px;
    left: 0px;
    width: 100%;
    height: 150px;
    background: ${theme.main.colors.secondary};
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.25);
    transition: 0.5s;

    &::after,
    &::before {
      content: "";
      width: 200%;
      height: 200%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -75%);
      background: ${theme.main.colors.bg};
    }

    &::before {
      border-radius: 45%;
      background: ${theme.main.colors.bg};
      animation: animate 7s linear infinite;
    }

    &::after {
      border-radius: 40%;
      background: rgba(245, 245, 245, 0.15);
      animation: animate 10s linear infinite;
    }

    @keyframes animate {
      0% {
        transform: translate(-50%, -75%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -75%) rotate(360deg);
      }
    }
  }

  &:hover div {
    top: -100px;
  }
`;
