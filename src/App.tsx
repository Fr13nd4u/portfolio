import * as React from "react";
import { GlobalStyle } from "./styles/globalStyles";
// import { Menu } from "./components/menu";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import styled from "styled-components";
import { theme } from "./styles/theme";
import { Container } from "./components/shared/Container";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Menu /> */}
      <Main>
        <Container>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  background-color: ${theme.main.colors.bg};
`;
