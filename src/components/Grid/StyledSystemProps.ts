import {
  BorderRadiusProps,
  BackgroundColorProps,
  FlexboxProps,
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
  PositionProps,
} from 'styled-system';

export type StyledSystemProps =
  | BorderRadiusProps
  | BackgroundColorProps
  | FlexboxProps
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
  | PositionProps
  | {
      color: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    };
