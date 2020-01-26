import styled, { css } from "styled-components";
import Wrapper from "../ui/Wrapper";

interface WrapperHeaderProps {
  readonly sticky?: boolean;
}

const WrapperHeader = styled(Wrapper)<WrapperHeaderProps>`
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(255, 255, 255, 0);
  top: 0;
  left: 0;
  right: 0;
  color: #555;
  padding: 1.45rem 0 0;
  box-shadow: rgba(0, 0, 0, 0) 0px 0.625rem 1.25rem,
    rgba(0, 0, 0, 0) 0px 0.375rem 0.375rem;

  .logo {
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 80px;
  }

  ${props =>
    props.sticky &&
    css`
      background: rgba(255, 255, 255, 0.98);
      padding: 0.3rem 0.3rem;
      color: #000;
      box-shadow: rgba(0, 0, 0, 0.04) 0px 0.4rem 1.25rem,
        rgba(0, 0, 0, 0.06) 0px 0.2rem 0.2rem;
      .logo {
        width: 60px;
      }
    `}
`;

export default WrapperHeader;
