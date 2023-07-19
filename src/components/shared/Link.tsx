import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ILink {
  children: React.ReactNode;
  variant: "outline" | "primary" | "secondary";
  href?: string;
  download?: boolean;
  disable?: boolean;
  target?: string;
}

export const Link: React.FC<ILink> = ({ children, variant, ...props }) => {
  return (
    <LinkWrap variant={variant} {...props}>
      {children}
    </LinkWrap>
  );
};

const LinkWrap = styled.a<ILink>`
  padding: 0.75rem 1.2rem;
  border-radius: 50px;

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
