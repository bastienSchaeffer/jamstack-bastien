import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css"; // delete if you want to bring your own CSS
import { navigate } from "gatsby";

// import SpringExample from "../components/external/spring";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: blue;
`;

const HeroTitle = styled.h1`
  margin-top: 200px;
  font-size: 500%;
`;
const HeroSubTitle = styled.h2`
  font-size: 300%;
`;

const IndexPage = () => {
  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);
  return (
    <Layout>
      <SEO title="Bast Home" />
      <HeroTitle>Hi, user!</HeroTitle>
      <HeroSubTitle as="h2">Want to create an account?</HeroSubTitle>
      {/* <SpringExample /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit,
        mollitia minima deserunt reprehenderit facere dolorum dicta
        exercitationem ratione ab cum voluptatibus sed numquam asperiores
        aliquam quos voluptates sit! Illum.
      </p>
      <Link to="/app/">Create an account</Link>
    </Layout>
  );
};

export default IndexPage;
