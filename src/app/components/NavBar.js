import React from "react";

import { useIdentityContext } from "react-netlify-identity-widget";

const NavBar = () => {
  const { user, isLoggedIn } = useIdentityContext();
  const message = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : "You are not logged in";

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
        marginBottom: "50px",
      }}
    >
      <h1>{message}</h1>
    </div>
  );
};

export default NavBar;
