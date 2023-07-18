import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
  ${normalize};

	*, *:after, *:before {
		box-sizing: border-box;
	}

	body {
		font-family: 'Montserrat', sans-serif;
		color: ${theme.main.colors.text};
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 0;
		letter-spacing: 0.01em;
		line-height: 1.7;
	}

	a {
		text-decoration: none;
    color: ${theme.main.colors.text};
	}
`