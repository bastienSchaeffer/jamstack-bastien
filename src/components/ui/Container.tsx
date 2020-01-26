import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.maxWidth};
  padding: 1.45rem 1.0875rem;
  position: relative;
`;

export default Container;
