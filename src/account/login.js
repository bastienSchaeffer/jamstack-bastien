import React from 'react';
import { navigate } from 'gatsby';
import Button from '../components/Button';

import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget';
// Default CSS
import 'react-netlify-identity-widget/styles.css';

function Login() {
  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);
  return (
    <>
      <Button
        onClick={() => setDialog(true)}
        size={['medium', 'large']}
        variant="danger"
      >
        LOGIN
      </Button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate('/account/profile')}
        onSignup={user => navigate('/account/profile')}
      />
    </>
  );
}

export default Login;
