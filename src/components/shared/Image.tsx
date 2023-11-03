import React from "react";
import styled from "styled-components";

interface ImageProps {
  photo: {
    sm: string;
    md: string;
    lg: string;
    alt: string;
  };
}

const Image: React.FC<ImageProps> = ({ photo }) => {
  const { sm, md, lg, alt } = photo;

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={lg} />
      <source media="(min-width: 600px)" srcSet={md} />
      <source srcSet={sm} />
      <Img src={lg} alt={alt} />
    </picture>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Image;
