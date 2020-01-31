import React, { useState, useEffect } from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';

import Layout from '../components/Layout/layout';
import SEO from '../components/SEO';
import { Link } from '../components/Link';
import { Box } from '../components/Grid';

import { Divers, Listing } from '../components/Tests';

const IndexPage = () => {
  const identity = useIdentityContext();
  const [lambdaData, setLambdaData] = useState();
  useEffect(() => {
    fetch('/.netlify/functions/lambda')
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
      <Box as="section" mb={4}>
        <h1>Hi, user!</h1>
        <h2>Want to create an account?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          fugit, mollitia minima deserunt reprehenderit facere dolorum dicta
          exercitationem ratione ab cum voluptatibus sed numquam asperiores
          aliquam quos voluptates sit! Illum.
        </p>
        <p>
          <b>Invoke Lambda dude: {lambdaData}</b>
          <Link to="/docs/" alt="style">
            See guide
          </Link>
        </p>
        <Link to="/account/" alt="Create an account" type="buttonBig">
          Create an account
        </Link>
      </Box>

      <Box as="section">
        <Divers />
      </Box>

      <Listing />
    </Layout>
  );
};

export default IndexPage;
