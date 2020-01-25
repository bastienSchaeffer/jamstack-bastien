import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  /* margin-bottom: 1.45rem; */

  ${props =>
    props.primary &&
    css`
      background: linear-gradient(175deg, #ffc60a 0%, #efb700 100%);
      :hover {
        background: ${({ theme }) => theme.colors.warn};
        /* background: linear-gradient(175deg, #ffc60a 0%, #efb700 100%); */
      }
    `}
`;

export default Wrapper;
