import * as React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { About, Contact, Footer, Hero, Menu, Projects } from "./components";
import styled from "styled-components";
import { theme } from "./styles/theme";
import { Container } from "./components/shared/Container";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Main>
        <Container>
          <Hero />
        </Container>
        <About />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  background-color: ${theme.main.colors.bg};
  overflow: hidden;
`;
