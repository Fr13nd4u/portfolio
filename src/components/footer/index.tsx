import * as React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Container } from "../shared/Container";
import { Link } from "../shared/Link";
import { BsGithub, BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";
import { media } from "../../styles/mixins";

export const Footer: React.FC = () => {
  return (
    <FooterWrap id="footer">
      <Container>
        <FooterContent>
          <p>Copyright © {new Date().getFullYear()}. All rights are reserved</p>

          <SocialList>
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
              <Link
                variant="outline"
                href="https://t.me/fr13ND4u"
                target="_blank"
              >
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
          </SocialList>
        </FooterContent>
      </Container>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  width: 100%;
  padding: 2rem 0 8rem;
  background: ${theme.main.colors.primary};
  color: ${theme.main.colors.white};

  ${media.lg`
    padding: 3rem 0px 3rem;
  `}
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;

  ${media.lg`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const SocialList = styled.ul`
  display: flex;

  li a {
    color: ${theme.main.colors.white};
  }
`;
