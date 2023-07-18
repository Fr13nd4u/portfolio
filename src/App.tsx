import * as React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { Menu } from "./components/menu";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import styled from "styled-components";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Menu /> */}
      <Main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;
