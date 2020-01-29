import React, { useState, useEffect } from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';

import Layout from '../components/Layout/layout';
import SEO from '../components/SEO';
import { Link } from '../components/Link';
import Image from '../components/Image';
import Button from '../components/Button';
import { Box } from '../components/Grid';

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
      {/* <SEO
        title="Jamstack Bastien"
        description="A simple jamstack with Gatsby and lambda functions"
      /> */}
      <section>
        <h1>Hi, user!</h1>
        <Button color="white" backgroundColor="tomato">
          Button Hello, world!
        </Button>
        <Button>Default Button!</Button>
        <Button variant="primary">I'm Primary Button!</Button>
        <Button variant="danger">I'm danger!</Button>
        <Button size={['medium', 'large']}>I'm large only</Button>
        <Button size={['medium', 'large']} variant="danger">
          I'm large only and danger
        </Button>
        <Button>Button 1</Button>
        <Button marginLeft={2}>Button 2</Button>
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
        <Box maxWidth="300px" mb={4}>
          <Image />
        </Box>
        <Link to="/app/" alt="Create an account" button="true">
          Create an account
        </Link>
      </section>
    </Layout>
  );
};

export default IndexPage;
