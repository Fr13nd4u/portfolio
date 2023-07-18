import { css } from "styled-components";


const breakpoints = {
	sm: 360,
	md: 768,
	lg: 1024,
	xl: 1200,
	xlMedium: 1440,
	xxl: 1600,
};

const mediaFunction =	(key: string) =>
	(...args) =>
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
	xlMedium: mediaFunction('xlMedium'),
	xxl: mediaFunction('xxl'),
};
