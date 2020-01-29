import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink, navigate } from 'gatsby';

// import useStickMode from '../hooks/useStickMode';
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
  // const [isSticky] = useStickMode();
  const isSticky = false;
  return (
    // bg={isSticky ? 'primary.400' : 'primary.600'}
    <Box as="header">
      {/* maxWidth="1200px"  */}
      <Box>
        <Text as="h2" color="white">
          Header: {siteTitle}
        </Text>
        <Text as="p">{isSticky ? 'isSticky' : 'not isSticky'}</Text>
        {/* css={{ textDecoration: 'none' }}  */}
        <Link to="/" data-testid="hero-title">
          <img src={logo} alt="Logo" />
        </Link>
        {/* NAV */}
        <Link to="/" data-testid="hero-title">
          HOME NOW
        </Link>
        <Link to="/app/">ACCOUNT</Link>
        {isLoggedIn && (
          <GatsbyLink
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
        )}
      </Box>
    </Box>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
