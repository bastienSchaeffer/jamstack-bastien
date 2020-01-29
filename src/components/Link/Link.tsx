import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import { variant } from 'styled-system';

const linkType = variant({
  prop: 'type',
  key: 'gatsLink',
});

const Link = styled(GatsbyLink)(linkType);

Link.defaultProps = {};

Link.displayName = `Link`;

export default Link;
