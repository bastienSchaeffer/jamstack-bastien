import styled, { css } from "styled-components";

interface WrapperProps {
  readonly primary?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  background: ${({ theme }) => theme.colors.dark};

  ${props =>
    props.primary &&
    css`
      background: linear-gradient(175deg, #ffc60a 0%, #efb700 100%);
      :hover {
        background: ${({ theme }) => theme.colors.warn};
      }
    `}
`;

export default Wrapper;
