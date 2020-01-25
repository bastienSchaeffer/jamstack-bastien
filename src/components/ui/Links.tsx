import { Link } from "gatsby";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  /* font-weight: bold; */
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkLight};
  :hover {
    color: ${({ theme }) => theme.colors.darkDark};
    text-decoration: underline;
  }

  ${props =>
    props.button &&
    css`
      background: ${({ theme }) => theme.colors.darkLight};
      border-radius: ${props => (props.round ? `500px` : `.25rem`)};
      display: inline-block;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      line-height: 1.25;
      min-width: 7rem;
      color: ${({ theme }) => theme.colors.light};
      :hover {
        background: ${({ theme }) => theme.colors.darkDark};
        color: ${({ theme }) => theme.colors.light};
        text-decoration: none;
      }
    `}
`;

export default StyledLink;
