import * as styledComponents from '@emotion/styled';
import { Global, css, keyframes } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import propTypes from '@styled-system/prop-types';
import { themeGet } from '@styled-system/theme-get';
import { theme } from './theme';

const { default: styled } = styledComponents;

export { css, Global, keyframes, ThemeProvider, theme, themeGet, propTypes };
export * from 'styled-system';
export default styled;
