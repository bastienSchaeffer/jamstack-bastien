import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout/layout';
import SEO from '../components/SEO';
import NavBar from './components/NavBar';
import Profile from './profile';
import Main from './main';
import PrivateRoute from './components/PrivateRoute';
import Login from './login';

const Account = () => {
  return (
    <Layout>
      <SEO
        title="Jamstack Bastien - Account"
        description="A simple jamstack with Gatsby and lambda functions"
      />
      <NavBar />
      <Router>
        <PrivateRoute path="/account/profile" component={Profile} />
        <PublicRoute path="/account">
          <PrivateRoute path="/" component={Main} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </Layout>
  );
};

function PublicRoute(props) {
  return <div>{props.children}</div>;
}

export default Account;
