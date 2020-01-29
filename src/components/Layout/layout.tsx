/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';

import GlobalStyles from '../../util/styles/GlobalStyles';
import { ThemeProvider, theme } from '../../util/styles';

import Header from '../Header';
import { Box } from '../Grid';
import Footer from '../Footer';
import { OutboundLink } from '../Link';

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
    <ThemeProvider theme={theme}>
      <>
        <Global styles={GlobalStyles} />
        <Header siteTitle="Jamstack" />
        <Box maxWidth="1200px" m="0 auto" px={3}>
          <Box py={250}>{children}</Box>
        </Box>
        <Footer>
          Built with
          {` `}
          <OutboundLink to="https://www.gatsbyjs.org" from="footer">
            Gatsby
          </OutboundLink>
        </Footer>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
