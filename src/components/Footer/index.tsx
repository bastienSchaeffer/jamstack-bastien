import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Grid';

const Footer = ({ children }) => (
  <Box
    as="footer"
    bg="grey.300"
    p={3}
    pb={0}
    mb={0}
    position="fixed"
    bottom={0}
    left={0}
    right={0}
  >
    <Box maxWidth="1200px" m="0 auto" py={3}>
      {children}
    </Box>
  </Box>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Footer;
