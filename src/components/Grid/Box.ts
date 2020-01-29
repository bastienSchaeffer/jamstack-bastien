//--------------------
import React from 'react';
// import { StyledComponentProps } from 'styled-components';
import { StyledSystemProps } from './StyledSystemProps';

import styled, {
  space,
  color,
  layout,
  border,
  background,
  position,
  propTypes,
} from '../../util/styles';

const Box = styled.div<StyledSystemProps>`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${background}
  ${position}
`;

Box.displayName = `Box`;

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.background,
  ...propTypes.position,
};

export default Box;
