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
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${media.xl`
    flex-direction: row;
  `}
`;
