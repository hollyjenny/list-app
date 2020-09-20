import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Form, Input, SubmitButton } from '../components/Login';
import PrivateRoute from '../PrivateRoute';
import { getApiUsers } from '../libs/api/mirageServers';
import List from "../pages/List";
import { useAuth } from "../context/auth";

function Login() {
  /**
  * @description execute getApiUsers function - fetch and create json file of items from mirage server
  */
  getApiUsers();

  const { setAuthTokens } = useAuth();

  const [isbuttonClicked, setIsbuttonClicked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/users')
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response;
    })
    .then((response) => {
      if (response.status === 200) {
        setAuthTokens(response.data);
        setIsbuttonClicked(true);
      }
      console.log(response.users);
    })
    //const payload = { name: username, password: password};
  }

  return (
      <Router>
      {!isbuttonClicked &&
        <Container>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email address"
              value={username}
              onChange={handleUsernameChange}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <SubmitButton
              type="submit"
              value="Sign In"
            />
          </Form>
        </Container>
        }
        {isbuttonClicked &&
          <PrivateRoute path="/list" component={List} />
        }
      </Router>
    );
  }
  
  export default Login;