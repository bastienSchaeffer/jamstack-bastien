import { createGlobalStyle } from "styled-components";
import theme from "./Theme";
import reset from "./reset";
import breakpoint from "styled-components-breakpoint";

export const GlobalStyle = createGlobalStyle`
  
  ${reset}
  
  html {
    font-size: 16px;
    color: rgba(255,255,255,.87);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1rem; /*.875rem;*/
    line-height: 1.5;
    background-color: ${theme.colors.light};
    color: ${theme.colors.dark};
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin: 0;
    line-height: 1.5;
  }

  /* html {
  font-size: 14px;
    ${breakpoint("tablet")`
      font-size: calc(16px + 3 * ((100vw - 320px) / 680));
    `}
    ${breakpoint("desktop")`
      font-size: 22px;
    `}
  } */


  

  
  a {
    color: ${theme.colors.info};
    :hover, :active, :focus{
      color: ${theme.colors.infoDark};
    }
  }

  img{
    max-width:100%;
    height: auto;
  }

  [data-reach-dialog-overlay] {
    z-index: 10000;
  }
`;
