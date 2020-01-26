import { Link, navigate } from "gatsby";
import React from "react";
import useStickMode from "../hooks/useStickMode";
import styled from "styled-components";
import { useIdentityContext } from "react-netlify-identity-widget";
import StyledLink from "../ui/Links";
import Container from "../ui/Container";
import WrapperHeader from "./WrapperHeader";
import Logo from "../../icons";

// ---------------------- Styles: @todo:remove
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: inline-block;
  }
  li {
    display: inline-block;
    :not(:last-child) {
      margin-right: 1em;
    }
  }
`;

const SubNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 80%;
`;

const ContainerHeader = styled(Container)`
  padding-bottom: 0;
`;

// ---------------------- Header
interface Props {
  siteTitle?: string;
}

const Header: React.FC<Props> = () => {
  const { isLoggedIn, logoutUser } = useIdentityContext();
  const [isSticky] = useStickMode();

  return (
    <WrapperHeader sticky={isSticky} as="header">
      <ContainerHeader>
        <Nav data-testid="navigation-main">
          <div className="logo">
            <Link to="/">
              <Logo name="logo" width={"100%"} className="basbabs" />
            </Link>
          </div>
          <ul>
            <li>
              <StyledLink to="/" data-testid="hero-title">
                <b>HOME</b>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/app/">
                <b>ACCOUNT</b>
              </StyledLink>
            </li>
          </ul>
        </Nav>

        {isLoggedIn && (
          <SubNav>
            <Nav data-testid="navigation-loggedin">
              <ul>
                <li>
                  <StyledLink to="/app/">Main</StyledLink>
                </li>
                <li>
                  <StyledLink to="/app/profile">Profile</StyledLink>
                </li>
                <li>
                  <StyledLink
                    to="/"
                    data-testid="link-logout"
                    onClick={async event => {
                      event.preventDefault();
                      await logoutUser();
                      navigate(`/`);
                    }}
                  >
                    Logout
                  </StyledLink>
                </li>
              </ul>
            </Nav>
          </SubNav>
        )}
      </ContainerHeader>
    </WrapperHeader>
  );
};

export default Header;
