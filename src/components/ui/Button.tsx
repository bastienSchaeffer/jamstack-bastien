import styled, { css } from "styled-components";

export const Button = styled.button`
  background: rgba(120, 130, 140, 0.13);
  min-width: 7rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.light};
  display: inline-block;
  font-weight: 500;
  outline: none;

  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: ${props => (props.round ? `500px` : `.25rem`)};
  margin: 0 0.2rem 0.2rem 0;

  :disabled {
    opacity: 0.4;
  }

  ${props =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.colors.darkLight};
      color: ${({ theme }) => theme.colors.light};
      :hover {
        background: ${({ theme }) => theme.colors.darkDark};
      }
    `}
`;

export const ButtonDanger = styled(Button)`
  background: ${({ theme }) => theme.colors.dangerDark};
  background: red;
  :hover {
    background: ${({ theme }) => theme.colors.dangerLight};
  }
`;

export const ButtonWarn = styled(Button)`
  background: ${({ theme }) => theme.colors.warn};
  :hover {
    background: ${({ theme }) => theme.colors.warnLight};
  }
`;
