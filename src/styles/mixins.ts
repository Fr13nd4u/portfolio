import { css } from "styled-components";

type Breakpoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

const breakpoints: Breakpoints = {
  sm: 360,
  md: 768,
  lg: 1024,
  xl: 1440,
  xxl: 1600,
};

const mediaFunction = (key: keyof Breakpoints) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...args: any[]) =>
    css`
      @media (min-width: ${breakpoints[key]}px) {
        ${args};
      }
    `;

export const media = {
	sm: mediaFunction('sm'),
	md: mediaFunction('md'),
	lg: mediaFunction('lg'),
	xl: mediaFunction('xl'),
	xxl: mediaFunction('xxl'),
};
