import React from "react";
import { navigate } from "gatsby";
import { Button } from "../components/ui/Button";

import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget";
// Default CSS
import "react-netlify-identity-widget/styles.css";

function Login() {
  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);
  return (
    <>
      <Button onClick={() => setDialog(true)} primary>
        LOGIN
      </Button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate("/app/profile")}
        onSignup={user => navigate("/app/profile")}
      />
    </>
  );
}

export default Login;
