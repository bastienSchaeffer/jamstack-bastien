import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

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

const IndexPage = () => (
  <Layout>
    <SEO title="Bast Home" />
    <HeroTitle>Hi, user!</HeroTitle>
    <HeroSubTitle as="h2">Want to create an account?</HeroSubTitle>
    {/* <SpringExample /> */}
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit,
      mollitia minima deserunt reprehenderit facere dolorum dicta exercitationem
      ratione ab cum voluptatibus sed numquam asperiores aliquam quos voluptates
      sit! Illum.
    </p>
    <p>
      Iusto odit ipsum rem ut cum asperiores optio alias quisquam dolores facere
      veniam nihil ducimus explicabo earum deserunt architecto, obcaecati
      praesentium aperiam, laudantium corrupti odio fugiat. Illum provident est
      voluptates.
    </p>
    <p>
      Exercitationem iusto similique reprehenderit a ullam laudantium mollitia,
      quidem earum vitae distinctio eaque corrupti dolores accusamus magnam
      omnis iure libero perspiciatis ex odio? Numquam enim vitae, facilis
      asperiores ipsam facere!
    </p>
    <p>
      Dolorum iste exercitationem fuga temporibus laboriosam. Officiis dolorem
      accusamus iure, adipisci ex iusto asperiores amet cupiditate earum quae
      laudantium nesciunt. Ducimus exercitationem possimus quos placeat sed
      reiciendis ea, quasi esse.
    </p>
    <p>
      Saepe qui, tempora dolorem laboriosam quidem velit modi ex repellat
      accusamus reiciendis commodi distinctio sunt itaque excepturi aperiam
      consequatur, id laudantium eligendi sed. Consequuntur saepe deserunt nulla
      sint tempore consequatur?
    </p>
    <p>
      Et unde ab reiciendis incidunt tenetur iure possimus, enim quam fugit,
      blanditiis, necessitatibus dolor. Labore molestiae quibusdam aperiam
      recusandae, culpa vitae libero voluptatibus aspernatur, non, blanditiis
      est. Nulla, quis explicabo?
    </p>
    <p>
      Rem mollitia velit consequuntur? Veritatis iure alias mollitia dolor
      nulla! Soluta officiis possimus et veritatis, nobis accusantium sunt
      assumenda, ipsum quod, neque atque! Dignissimos quos perferendis voluptate
      quaerat minima iste!
    </p>
    {/* <Container>Styled component</Container> */}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
