import React from 'react';
import { render } from '../../util/test';
import Button from './';
import serializer from 'jest-emotion';
expect.addSnapshotSerializer(serializer);

describe('button', () => {
  test('Button renders', () => {
    const { getByText } = render(<Button>Button label</Button>);

    expect(getByText(`Button label`)).toMatchSnapshot();
  });

  test('<Button> renders with props', () => {
    const { getByText } = render(
      <Button m={2} px={[1, 2, 3]} size="medium">
        Button label
      </Button>
    );

    expect(getByText(`Button label`)).toMatchSnapshot();
    expect(getByText(`Button label`)).toHaveStyle(`margin: 8px`);
  });
});
