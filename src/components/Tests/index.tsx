/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import { Box, Flex, Br } from '../Grid';
import Button from '../Button';
import Image from '../Image';
import { Text } from '../Text';

const Tests = () => {
  return (
    <div>
      <Text as="h2">Tests file empty</Text>
      <Box maxWidth="300px" mb={4}>
        <Image />
      </Box>
      <Button color="white" backgroundColor="tomato">
        Button Hello, world!
      </Button>
      <Button>Default Button!</Button>
      <Button variant="primary">I'm Primary Button!</Button>
      <Button variant="danger">I'm danger!</Button>
      <Button size={['medium', 'large']}>I'm large only</Button>
      <Button size={['medium', 'large']} variant="danger">
        I'm large only and danger
      </Button>
      <Button>Button 1</Button>
      <Button marginLeft={2}>Button 2</Button>
      <Br />
    </div>
  );
};

Tests.propTypes = {};

export default Tests;
