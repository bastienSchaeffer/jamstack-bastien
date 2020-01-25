import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const HeroTitle = styled.h1`
  margin-top: 200px;
  font-size: 500%;
`;
const HeroSubTitle = styled.h2`
  font-size: 300%;
`;

const SecondPage = () => {
  const [lambdaData, setLambdaData] = useState();
  useEffect(() => {
    fetch("/.netlify/functions/hello-world")
      .then(data => data.json())
      .then(data => {
        console.log("------------");
        console.log(data);
        setLambdaData(data.message);
      });
  }, []);
  return (
    <Layout>
      <SEO title="Bast Page two" />
      <HeroTitle>Hey, user!</HeroTitle>
      <HeroSubTitle as="h2">{lambdaData}</HeroSubTitle>
      <p>
        Exercitationem iusto similique reprehenderit a ullam laudantium
        mollitia, quidem earum vitae distinctio eaque corrupti dolores accusamus
        magnam omnis iure libero perspiciatis ex odio? Numquam enim vitae,
        facilis asperiores ipsam facere!
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
        consequatur, id laudantium eligendi sed. Consequuntur saepe deserunt
        nulla sint tempore consequatur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quis
        possimus quasi iste sunt cupiditate saepe et voluptate ipsam dolorum non
        nulla, harum quia molestias dolores debitis, voluptatum sit itaque.
      </p>
      <p>
        Voluptatem aliquid rerum enim in aliquam voluptate repellat, qui, quam
        sed eaque sint sit iusto labore quidem dicta nobis laborum. Voluptate
        recusandae nam aliquam ducimus, alias iusto tenetur voluptas
        voluptatibus?
      </p>
      <p>
        Eius, magni dolorum vitae modi velit reiciendis veniam labore, neque,
        iure maiores ut dolor illo itaque accusantium sint hic voluptatem vero.
        Delectus iusto aspernatur voluptas exercitationem ratione veniam,
        perspiciatis praesentium.
      </p>
      <p>
        Necessitatibus, quisquam corrupti. Cum voluptatum recusandae obcaecati
        sed reprehenderit consectetur dolores quisquam quos voluptas reiciendis,
        ad nisi quo cumque voluptates quasi consequatur commodi totam fugiat!
        Animi amet quas ea est.
      </p>
      <p>
        Unde dolorem, iure, distinctio minima eos temporibus asperiores eligendi
        culpa suscipit quibusdam nihil odio nisi velit. Ab, officia porro maxime
        vero sint, fugit eum corrupti, odit dolore dolores eos sunt.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;
