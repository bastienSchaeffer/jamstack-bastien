import React from 'react';
import { Global } from '@emotion/core';
import GlobalStyles from '../src/util/styles/GlobalStyles';
import { ThemeProvider, theme } from '../src/util/styles';
import styled from '@emotion/styled';

const StyledStorybook = styled.div`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.4);
  font-family: 'Ubuntu', sans-serif;
  
  #story-root {
    padding: 50px 0;
  }
`;

const EmotionThemeProvider = storyFn => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <StyledStorybook>
      {storyFn()}
    </StyledStorybook>
  </ThemeProvider>
);

export default EmotionThemeProvider;