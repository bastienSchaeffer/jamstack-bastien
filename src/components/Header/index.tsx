/** @jsx jsx */
// import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink, navigate } from 'gatsby';
import { jsx } from '@emotion/core';

import useStickMode from '../hooks/useStickMode';
import { useIdentityContext } from 'react-netlify-identity-widget';

import { Box } from '../Grid';
import { Link } from '../Link';
import { Text } from '../Text';
import logo from '../../images/logo-50.svg';

type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => {
  const { isLoggedIn, logoutUser } = useIdentityContext();
  const [isSticky] = useStickMode();
  // const isSticky = false;
  return (
    <Box as="header" bg={isSticky ? 'primary.400' : 'primary.600'}>
      <Box maxWidth="1200px" m="0 auto">
        <Text as="h2" color="white">
          Header: {siteTitle}
        </Text>
        <Text as="p">{isSticky ? 'isSticky' : 'not isSticky'}</Text>
        <span data-testid="navigation-main"></span>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        {/* NAV */}
        <Link to="/" data-testid="hero-title" css={{ textDecoration: 'none' }}>
          HOME NOW
        </Link>
        <Link to="/app/" css={{ textDecoration: 'none' }}>
          ACCOUNT
        </Link>
        {isLoggedIn && (
          <span data-testid="navigation-loggedin">
            <GatsbyLink
              css={{ textDecoration: 'none' }}
              to="/"
              data-testid="link-logout"
              onClick={async event => {
                event.preventDefault();
                await logoutUser();
                navigate(`/`);
              }}
            >
              LOGOUT
            </GatsbyLink>
          </span>
        )}
      </Box>
    </Box>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
