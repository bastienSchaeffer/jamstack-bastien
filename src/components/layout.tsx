/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import theme from "../styles/Theme";

import Header from "./header";
import Footer from "./footer";

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `230px 1.0875rem 1.45rem`,
            paddingTop: 0,
            // minHeight: `calc(100vh - 400px)`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
