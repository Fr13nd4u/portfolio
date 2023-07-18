import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
  ${normalize};

	:root {
		--color-white: #fff;
	}

	*, *:after, *:before {
		box-sizing: border-box;
	}

	body {
		font-family: 'Montserrat', sans-serif;
		color: var(--color-white)
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 0;
		letter-spacing: 0.01em;
	}
`