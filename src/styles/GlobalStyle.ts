import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

export const GlobalStyle = createGlobalStyle`

  /* Reset */
    /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    /* line-height: 1.5; */
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  p{
    margin: calc(1em + .5vw) 0;
  }

  /* //----------- */
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
    margin: 200px 0 0 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin: 0;
    line-height: 1.5;
  }
  
  a {
    color: ${theme.colors.info};
    :hover{
      color: ${theme.colors.infoDark};
    }
  }

  [data-reach-dialog-overlay] {
    z-index: 10000;
  }
`;
