import React from 'react';
import Button from '../components/Button';
import { useIdentityContext } from 'react-netlify-identity-widget';
import styled from 'styled-components';

const Pre = styled.pre`
  padding: 0.5em;
  background: white;
  overflow: auto;
`;
function Main() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { user } = useIdentityContext();
  const [err, setErr] = React.useState('');

  const handleClick = e => {
    e.preventDefault();
    setLoading(true);
    fetch('/.netlify/functions/auth-hello', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.token.access_token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setData(json);
      })
      .catch(err => {
        if (window.location.origin === 'http://localhost:8000')
          setErr('"http://localhost:8000" => "http://localhost:8888"');
        else setErr(err);
        throw err;
      });
  };

  return (
    <>
      <h2>Your Main App</h2>
      <ul>
        <li>API: {user.api && user.api.apiURL}</li>
        <li>ID: {user.id}</li>
      </ul>
      <hr />
      <br />

      <Button onClick={handleClick} size={['medium', 'large']} variant="danger">
        {loading ? 'Loading...' : 'Call Lambda Function'}
      </Button>
      {err && <Pre>{JSON.stringify(err, null, 2)}</Pre>}
      <Pre>{JSON.stringify(data, null, 2)}</Pre>
    </>
  );
}

export default Main;
