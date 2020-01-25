import React, { useState } from "react";
import Wrapper from "./ui/Wrapper";
import Container from "./ui/Container";
import styled from "styled-components";

const WrapperFooter = styled(Wrapper)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer: React.FC = () => {
  return (
    <WrapperFooter as="footer" primary>
      <Container>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </Container>
    </WrapperFooter>
  );
};

export default Footer;
