import React from "react";
import { navigate } from "gatsby";
import { Button, ButtonDanger, ButtonWarn } from "../components/ui/Button";
import styled from "styled-components";

import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css"; // delete if you want to bring your own CSS

function Login() {
  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);
  return (
    <>
      {/* <Button>Click me</Button>
      <Button primary>Primary</Button>
      <Button>Rounded</Button>
      <ButtonDanger>danger</ButtonDanger>
      <ButtonWarn>warn</ButtonWarn>
      <Button primary>Primary</Button>
      <ButtonWarn data-testid="buttonWarnId">warn</ButtonWarn> */}
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
