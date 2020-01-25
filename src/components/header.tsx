import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Wrapper from "./ui/Wrapper";
import Container from "./ui/Container";
import { throttle } from "lodash";
import styled, { css } from "styled-components";

import logo from "../images/logo-black.svg";

const WrapperHeader = styled(Wrapper)`
  /* background: red; */
  position: fixed;
  width: 100%;
  z-index: 1000;
  transition: all 0.35s ease;
  background: rgba(255, 255, 255, 0);
  top: 0;
  left: 0;
  right: 0;
  color: #555;
  padding: 1.45rem 1.0875rem;

  img {
    max-width: 8%;
  }

  ${props =>
    props.sticky &&
    css`
      background: rgba(255, 255, 255, 0.98);
      padding: 0.3rem 0.3rem;
      color: #000;
      img {
        max-width: 5%;
      }
    `}
`;
interface Props {
  siteTitle: string;
}

const Nav = styled.ul`
  list-style-type: none;
  display: inline-block;
  position: absolute;
  right: 0;
  top: 40px;

  li {
    display: inline-block;
    :not(last-child) {
      margin-right: 3em;
    }
  }
`;
const Header: React.FC<Props> = ({ siteTitle = "" }) => {
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;
    setShouldShowShadow(currentScrollTop > 20);
  }
  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 50);
  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled);
  }, []);

  // const shadowStyle = shouldShowShadow ? "shadow" : "";

  return (
    <WrapperHeader as="header" sticky={shouldShowShadow}>
      <Container>
        {/* <h1 style={{ margin: 0 }} data-testid="hero-title">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1> */}

        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Logo" />
        </Link>
        <Nav>
          <li>ABOUT</li>
          <li>CONTACTS</li>
          <li>LOGIN</li>
        </Nav>
      </Container>
    </WrapperHeader>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Link } from "gatsby";
// import styled from "styled-components";

// import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled";

// interface Props {
//   siteTitle: string;
// }

// const Header: React.FC<Props> = ({ siteTitle = "" }) => {
//   const [shouldHideHeader, setShouldHideHeader] = useState(false);
//   const [shouldShowShadow, setShouldShowShadow] = useState(false);

//   const MINIMUM_SCROLL = 80;
//   const TIMEOUT_DELAY = 400;
//   //https://medium.com/mtholla/create-a-transitioning-header-using-react-hooks-like-mediums-c70ed211f7c9
//   useDocumentScrollThrottled(
//     (callbackData: { previousScrollTop: number; currentScrollTop: number }) => {
//       const { previousScrollTop, currentScrollTop } = callbackData;
//       const isScrolledDown = previousScrollTop < currentScrollTop;
//       const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

//       setShouldShowShadow(currentScrollTop > 2);

//       setTimeout(() => {
//         setShouldHideHeader(isScrolledDown && isMinimumScrolled);
//       }, TIMEOUT_DELAY);
//     }
//   );

//   const shadowStyle = shouldShowShadow ? "shadow" : "";
//   const hiddenStyle = shouldHideHeader ? "hidden" : "";

//   return (
//     <HeaderStyled className={`${shadowStyle} ${hiddenStyle}`}>
//       <div className="logon" data-testid="hero-title">
//         <Link
//           to="/"
//           style={{
//             color: `black`,
//             textDecoration: `none`,
//           }}
//         >
//           <h1>{siteTitle}</h1>
//         </Link>
//       </div>
//       <ul className="links">
//         <li className="link-item">home</li>
//         <li className="link-item">about</li>
//         <li className="link-item">join</li>
//       </ul>
//     </HeaderStyled>
//   );
// };

// const HeaderStyled = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   height: 86px;
//   background-color: rgba(255, 255, 255, 0.98);
//   color: #333;
//   transform: translateY(0);
//   transition: transform 0.2s ease;
//   padding: 0px 1.0875rem 1.45rem;

//   /* &.shadow {
//     box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
//   }

//   &.hidden {
//     transform: translateY(-110%);
//   } */
// `;
// export default Header;

// /*
