import React from 'react';
import Button from './index';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import readme from './Button.md';
import {
  withKnobs,
  text,
  radios,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

const story = storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addParameters({
    jest: ['index.test.tsx'],
  });

story.add(
  'Button Component',
  () => (
    <Button
      borderRadius={number('borderRadius', 0)}
      size={radios(
        'Size',
        { default: 'default', medium: 'medium', large: 'large' },
        'large'
      )}
      variant={radios(
        'Variant',
        { danger: 'danger', secondary: 'secondary', primary: 'primary' },
        'danger'
      )}
    >
      {text('Label (child)', 'Button Label', 0)}
    </Button>
  ),
  {
    info: {
      source: false,
      text: `${readme}`,
      inline: true, // Displays info inline vs click button to view
      header: false,
      propTables: [],
    },
  }
);
