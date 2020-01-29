import styled, { display, propTypes } from '../../util/styles';

type BrProps = {
  display?: string;
};

const Br = styled.br<BrProps>`
  ${display}
`;

Br.displayName = `Br`;

Br.defaultProps = {
  display: `block`,
};

Br.propTypes = {
  ...propTypes.display,
};

export default Br;
