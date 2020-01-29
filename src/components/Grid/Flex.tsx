import styled, { flexbox, propTypes } from '../../util/styles';
import Box from './Box';

type FlexProps = {
  display?: string;
};

const Flex = styled(Box)<FlexProps>`
  ${flexbox}
`;

Flex.displayName = `Flex`;

Flex.defaultProps = {
  display: 'flex',
};

Flex.propTypes = {
  ...propTypes.flexbox,
};

export default Flex;
