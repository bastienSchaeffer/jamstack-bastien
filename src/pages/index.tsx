import React, { useState, useEffect } from "react";
import { useIdentityContext } from "react-netlify-identity-widget";

import Layout from "../components/layout";
import SEO from "../components/seo";
import StyledLink from "../components/ui/Links";

const IndexPage = () => {
  const identity = useIdentityContext();
  const [lambdaData, setLambdaData] = useState();
  useEffect(() => {
    fetch("/.netlify/functions/lambda")
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
        <h1>Hi, user!</h1>
        <h2>Want to create an account?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          fugit, mollitia minima deserunt reprehenderit facere dolorum dicta
          exercitationem ratione ab cum voluptatibus sed numquam asperiores
          aliquam quos voluptates sit! Illum.
        </p>
        <p>
          <b>{lambdaData}</b>
        </p>
        <StyledLink to="/app/" alt="Create an account" button="true">
          Create an account
        </StyledLink>
      </section>
    </Layout>
  );
};

export default IndexPage;
