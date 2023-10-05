import * as React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContactForm: React.FC = () => {
  return <FormWrap></FormWrap>;
};

const FormWrap = styled.div`
  width: 100%;
  min-height: 15vh;
  background: ${theme.main.colors.secondary};
`;
