import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { colorsStoryBook } from '../../util/styles/theme';
const story = storiesOf('Documentation', module).addDecorator(withInfo);
import { Text } from '../Text';
import { Box, Flex } from '../Grid';

story.add('Colors', () => (
  <>
    <Flex justifyContent="flex-start" flexWrap="wrap">
      {Object.entries(colorsStoryBook).map(obj => (
        <Flex
          key={obj}
          bg={obj[1]}
          width={1 / 4}
          height={200}
          flexDirection="column"
        >
          <Flex key={obj} bg={'orange'} flex={1} m={20} />
          <Flex key={obj} bg={'cyan'} flex={1} m={20} />
          <Flex key={obj} bg={'purple'} flex={1} m={20} />
          {/* <Text as="p">{obj[0]}</Text>
          <Text as="p">{obj[1]}</Text> */}
        </Flex>
      ))}
    </Flex>
  </>
));
