import React, { useState } from "react";
import Wrapper from "./ui/Wrapper";
import Container from "./ui/Container";

const Footer: React.FC = () => {
  return (
    <Wrapper as="footer" primary>
      <Container>
        <h1>Footer</h1>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </Container>
    </Wrapper>
  );
};

export default Footer;
