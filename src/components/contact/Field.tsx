import * as React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactElement;
  type: string;
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errorMessage: string | undefined;
}

const Field: React.FC<InputFieldProps> = ({
  icon,
  type,
  id,
  placeholder,
  register,
  errorMessage,
}) => {
  if (type == "textarea") {
    return (
      <Label isValid={!errorMessage}>
        <LabelIcon isValid={!errorMessage}>{icon}</LabelIcon>
        <textarea
          placeholder={placeholder}
          id={id}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          {...register(id)}
          rows={3}
        />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </Label>
    );
  }

  return (
    <Label isValid={!errorMessage}>
      <LabelIcon isValid={!errorMessage}>{icon}</LabelIcon>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        {...register(id)}
      />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </Label>
  );
};

const Label = styled.label<{ isValid: boolean }>`
  position: relative;
  display: flex;
  gap: 0.5rem;
  padding: 12px 16px;

  input,
  textarea {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: ${theme.main.colors.text};
  }

  &::after {
    content: "";
    position: absolute;
    right: 0px;
    bottom: -1px;
    left: 0px;
    height: 1px;
    background: ${(p) =>
      p.isValid ? theme.main.colors.secondary : theme.main.colors.text_error};
  }
`;

const LabelIcon = styled.span<{ isValid: boolean }>`
  font-size: 20px;
  color: ${(p) =>
    p.isValid ? theme.main.colors.secondary : theme.main.colors.text_error};
`;

const ErrorText = styled.span`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;
  line-height: 20px;
  font-size: 14px;
  color: ${theme.main.colors.text_error};
`;

export default Field;
