import * as React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation logic here
    console.log(formData); // You can replace this with your submission logic
  };

  return (
    <FormWrap>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
    </FormWrap>
  );
};

const FormWrap = styled.div`
  width: 100%;
  min-height: 15vh;

  h2 {
    text-align: center;
    color: ${theme.main.colors.secondary};
  }
`;
