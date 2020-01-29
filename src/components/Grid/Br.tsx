import styled, { display, propTypes } from '../../util/styles';

const Br = styled.br`
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
