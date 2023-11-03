import React from "react";
import styled from "styled-components";

interface ImageProps {
  photo: {
    sm: string;
    md: string;
    alt: string;
  };
}

const Image: React.FC<ImageProps> = ({ photo }) => {
  const { sm, md, alt } = photo;

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={md} />
      <Img src={sm} alt={alt} />
    </picture>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Image;
