import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import StyledLink from "../components/ui/Links";
import { useIdentityContext } from "react-netlify-identity-widget";

const HeroTitle = styled.h1`
  /* font-size: 500%; */
`;
const HeroSubTitle = styled.h2`
  /* font-size: 300%; */
`;

const HeadPage = styled.header`
  font-size: 250%;
`;

const IndexPage = () => {
  const identity = useIdentityContext();
  const [lambdaData, setLambdaData] = useState();

  useEffect(() => {
    fetch("/.netlify/functions/hello-world")
      .then(data => data.json())
      .then(data => {
        setLambdaData(data.message);
      });
  }, []);

  return (
    <Layout>
      <SEO
        title="Jamstack Bastien"
        description="A simple jamstack with Gatsby and lambda functions"
      />
      <section>
        <HeadPage>
          <h1>Hi, user!</h1>
          <h2>Want to create an account?</h2>
        </HeadPage>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          fugit, mollitia minima deserunt reprehenderit facere dolorum dicta
          exercitationem ratione ab cum voluptatibus sed numquam asperiores
          aliquam quos voluptates sit! Illum.
        </p>
        <p>
          <b>{lambdaData}</b>
        </p>
        <StyledLink to="/app/" alt="Create an account" button>
          Create an account
        </StyledLink>
      </section>
    </Layout>
  );
};

export default IndexPage;
