/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import theme from "../styles/Theme";

import Header from "./Header/header";
import Footer from "./footer";

const WrapperVert = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-end;
  > div,
  header,
  footer {
    border: solid 1px black;
  } */
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle theme="light" />
      <ThemeProvider theme={theme}>
        <WrapperVert>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `200px auto 0`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
              paddingTop: 0,
              paddingBottom: "200px",
              // minHeight: `calc(100vh - 200px)`,
            }}
          >
            <main>{children}</main>
          </div>
          <Footer />
        </WrapperVert>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
