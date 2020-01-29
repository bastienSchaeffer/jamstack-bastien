//--------------------
import React from 'react';
// import { StyledComponentProps } from 'styled-components';
import {
  BorderRadiusProps,
  BackgroundColorProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LetterSpacingProps,
  LineHeightProps,
  MaxWidthProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  TextStyleProps,
} from 'styled-system';

export type StyledSystemProps =
  | BorderRadiusProps
  | BackgroundColorProps
  | FontFamilyProps
  | FontFamilyProps
  | FontSizeProps
  | FontStyleProps
  | FontWeightProps
  | MaxWidthProps
  | LetterSpacingProps
  | LineHeightProps
  | SizeProps
  | SpaceProps
  | TextAlignProps
  | TextStyleProps
  | {
      color: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
      // css?: keyof any;
      // [k: string]: any;
    };
//--------------------
//-----------------
// type StyledSystemProps<
//   C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
//   P extends object
// > = StyledComponentProps<C, any, P, never> & {
//   as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
// };

// type BaseHeadingProps = StyledSystemProps<
//   'h1',
//   ColorProps & SpaceProps & { isBig?: boolean }
// >;

// const BaseHeading = styled.h1<BaseHeadingProps>``;
//-----------------

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
