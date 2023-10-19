import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');
  ${normalize};

	*, *:after, *:before {
		box-sizing: border-box;
	}

	body {
		font-family: 'Montserrat', sans-serif;
		color: ${theme.main.colors.text};
		background: ${theme.main.colors.bg};
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

	input, textarea {
		background: transparent;
    border: none;
    outline: none;
	}

	textarea {
		resize: vertical;
	}

	ul {
		list-style: none;

		padding: 0;
		margin: 0;
	}

	/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${theme.main.colors.primary} transparent;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${theme.main.colors.primary};
    border-radius: 25px;
		border: 3px solid ${theme.main.colors.bg};
  }
`