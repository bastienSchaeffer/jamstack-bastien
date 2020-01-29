import { createGlobalStyle } from './index';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
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
      :hover, :active, :focus{
        color: ${theme.colors.secondaryB};
      }
    }  
  
`;

export default GlobalStyles;
