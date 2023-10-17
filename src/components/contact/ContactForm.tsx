/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from "react";

import { FieldValues, UseFormRegister, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";

import Field from "./Field";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import { media } from "../../styles/mixins";

interface FormData extends FieldValues {
  name: string;
  email: string;
  message?: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Full name should be at least 2 characters long"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  message: yup.string(),
});

export const ContactForm: React.FC = () => {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormWrap>
      <h2>Get In Touch</h2>

      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FieldsWrap>
          <Field
            icon={<BsPerson />}
            id="name"
            type="text"
            placeholder="Full name"
            errorMessage={errors.name?.message}
            register={register as unknown as UseFormRegister<FieldValues>}
          />
          <Field
            icon={<AiOutlineMail />}
            id="email"
            type="email"
            placeholder="Email"
            errorMessage={errors.email?.message}
            register={register as unknown as UseFormRegister<FieldValues>}
          />

          <Field
            id="message"
            icon={<BiMessageSquareDetail />}
            type="textarea"
            placeholder="Your message"
            errorMessage={errors.message?.message}
            register={register as unknown as UseFormRegister<FieldValues>}
          />
        </FieldsWrap>

        <SubmitBtn>Send message</SubmitBtn>
      </Form>
    </FormWrap>
  );
};

const FormWrap = styled.div`
  width: 100%;
  min-height: 15vh;

  h2 {
    text-align: center;
    color: ${theme.main.colors.secondary};
    margin-bottom: 2.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SubmitBtn = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  min-width: 150px;
  cursor: pointer;
  color: ${theme.main.colors.white};
  background: ${theme.main.colors.secondary};
  border: 1px solid ${theme.main.colors.secondary};

  ${media.md`
    width: fit-content;
  `}
`;

const FieldsWrap = styled.div`
  display: grid;
  gap: 1.5rem;

  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto;
    gap: 2rem 1.5rem
  `}
`;
