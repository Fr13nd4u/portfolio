import * as React from "react";
import styled from "styled-components";
import { Container } from "../shared/Container";
import { ContactMap } from "./ContactMap";
import { ContactForm } from "./ContactForm";
import { media } from "../../styles/mixins";

export const Contact: React.FC = () => {
  return (
    <ContactWrap id="contact">
      <Container>
        <Content>
          <ContactMap />
          <ContactForm />
        </Content>
      </Container>
    </ContactWrap>
  );
};

const ContactWrap = styled.section`
  width: 100%;
  padding: 2rem 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1.5rem;
  min-height: 75vh;
  margin: 1rem 0;

  ${media.md`
    gap: 3rem;
  `}

  ${media.lg`
    flex-direction: row;
  `}
`;
