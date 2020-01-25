import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import Wrapper from "./ui/Wrapper";
import Container from "./ui/Container";
import { throttle } from "lodash";
import styled, { css } from "styled-components";
import { useIdentityContext } from "react-netlify-identity-widget";

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
    width: 70px;
  }

  ${props =>
    props.sticky &&
    css`
      background: rgba(255, 255, 255, 0.98);
      padding: 0.3rem 0.3rem;
      color: #000;
      img {
        width: 50px;
      }
    `}
`;
interface Props {
  siteTitle: string;
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: absolute;
  right: 0;
  top: 40px; */
  ul {
    list-style-type: none;
    display: inline-block;
  }
  li {
    display: inline-block;
    :not(:last-child) {
      margin-right: 3em;
    }

    a {
      color: black;
      text-decoration: none;
    }
  }
`;

const SubNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header: React.FC<Props> = ({ siteTitle = "" }) => {
  // {siteTitle}
  const { user, isLoggedIn, logoutUser } = useIdentityContext();

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
        <Nav>
          {/* <h3>{isLoggedIn ? "loged in" : "logde out"}</h3> */}
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img src={logo} alt="Logo" width="70" />
          </Link>
          <ul>
            <li>
              <Link to="/">
                <b>HOME</b>
              </Link>
            </li>
            <li>
              <Link to="/app/">
                <b>ACCOUNT</b>
              </Link>
            </li>
          </ul>
        </Nav>
        {isLoggedIn && (
          <SubNav>
            <nav>
              <Link to="/app/">Main</Link>
              {` `}
              <Link to="/app/profile">Profile</Link>
              {` `}
              {isLoggedIn ? (
                <a
                  href="/"
                  onClick={async event => {
                    event.preventDefault();
                    await logoutUser();
                    navigate(`/app/login`);
                  }}
                >
                  Logout
                </a>
              ) : (
                  <Link to="/app/login">Login</Link>
                )}
            </nav>
          </SubNav>
        )}
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
