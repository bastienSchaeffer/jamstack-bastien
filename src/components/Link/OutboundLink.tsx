import React from 'react';
import PropTypes from 'prop-types';
// import GoogleAnalytics from "react-ga";

type OutboundLinkProps = {
  to: string;
  from: string;
  target: string;
  children: string;
  className?: string;
};

const OutboundLink = ({
  to,
  from,
  target,
  children,
  className,
}: OutboundLinkProps) => (
  <a
    href={to}
    target={target}
    className={className}
    rel="noopener"
    onClick={() => {
      console.log(`OutboundLink.tsx clicked`);
      // GoogleAnalytics.event({
      //   category: "Outbound Link",
      //   action: `[clicked] ${from}`,
      //   label: to,
      // });
    }}
  >
    {children}
  </a>
);

OutboundLink.propTypes = {
  to: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

OutboundLink.defaultProps = {
  target: ``,
  className: ``,
};

export default OutboundLink;
