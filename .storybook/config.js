import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import GlobalStyleDecorator from './GlobalStyleDecorator';

// Automatically import all files ending in *.story.tsx
const req = require.context('../src', true, /\.story\.tsx$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

// Inject the Global styles (theme)
addDecorator(GlobalStyleDecorator);

// Define global skinning 
addDecorator(
  withOptions({
    name: 'Jamstack Bast',
    url: '/',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    // showPanel: true,
    // isFullscreen: false,
    // panelPosition: 'right',
    // showStroriesPanel: true,
    // isToolshown: true,
  }),
);

configure(loadStories, module);