import { css } from '@emotion/core';
import { theme } from './theme';

const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
    background: #f2f2f2;
  }

  /* Netlify Auth Overlay */
  [data-reach-dialog-overlay] {
    z-index: 10000;
  }

  a {
    color: ${theme.colors.primaryB};
    :hover,
    :active,
    :focus {
      color: ${theme.colors.secondaryB};
    }
  }

  img {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
