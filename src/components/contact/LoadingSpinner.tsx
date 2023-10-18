import * as React from "react";
import styled, { keyframes } from "styled-components";

const LoadingSpinner: React.FC = () => {
  return (
    <LoadingSpinnerContainer>
      <Spinner />
    </LoadingSpinnerContainer>
  );
};

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

const LoadingSpinnerContainer = styled.div`
  text-align: center;
`;

const Spinner = styled.div`
  display: inline-block;
  height: 14px;

  &::after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

export default LoadingSpinner;
