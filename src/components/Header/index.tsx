/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useIdentityContext } from 'react-netlify-identity-widget';
import PropTypes from 'prop-types';
import { Link as GatsbyLink, navigate } from 'gatsby';

import useStickMode from '../hooks/useStickMode';
import { Box, Flex } from '../Grid';
import { Link } from '../Link';
import logo from '../../images/logo-50.svg';

type HeaderProps = {
  siteTitle?: string;
};

const styleGatsbyLink = {
  textDecoration: 'none',
  display: 'inline-block',
  marginLeft: '4px',
  borderRadius: '4px',
  padding: '2px 8px',
  background: 'rgba(255, 255, 255, 0.5)',
  color: '#0c0c0c',
  transition: 'all .2s ease',
  '&:hover': {
    background: '#0c0c0c',
    color: '#fff',
  },
};

const styleBordered = {
  border: 'solid 1px rgba(0, 0, 0, 0.1)',
};

const Header = ({ siteTitle }: HeaderProps) => {
  const { isLoggedIn, logoutUser } = useIdentityContext();
  const [isSticky] = useStickMode();

  const styledButtonBordered = Object.assign(styleGatsbyLink, styleBordered);
  return (
    <Box
      as="header"
      bg={isSticky ? 'rgba(255, 255, 255, 0.97)' : 'rgba(255, 255, 255, 0)'}
      p={isSticky ? '30px' : '50px'}
      zIndex={1000}
      position="fixed"
      top={0}
      left={0}
      right={0}
      css={{ transition: 'all 0.2s ease' }}
    >
      <Box maxWidth="1200px" m="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link to="/" css={{ lineHeight: 1 }}>
            <img src={logo} alt="Logo" data-testid="navigation-main" />
          </Link>
          <Box p={3}>
            <Link to="/" data-testid="hero-title" css={styledButtonBordered}>
              HOME
            </Link>
            <Link to="/account/" css={styledButtonBordered}>
              ACCOUNT
            </Link>
            {isLoggedIn && (
              <span data-testid="navigation-loggedin">
                <GatsbyLink
                  css={styledButtonBordered}
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
        </Flex>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
