import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Logo from '../../images/logo-black.svg';
const story = storiesOf('Documentation|Readme', module)
  .addDecorator(withInfo)
  .addParameters({ info: { disable: false, inline: true }, showPanel: true });

story.add(
  'Introduction',
  () => (
    <>
      <div style={{ textAlign: 'center' }}>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: '200px', marginBottom: '1rem' }}
        />
      </div>
    </>
  ),
  {
    info: {
      source: false,
      text: `
      # Simple components style guide

      ## Approach

      - use emotion
      - use styled-system

      ~~~js
      <Greatness />
      ~~~
      `,
      inline: true, // Displays info inline vs click button to view
      header: false,
    },
  }
);
