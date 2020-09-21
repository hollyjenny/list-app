import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Form, Input, SubmitButton, Error } from '../components/styledComponents';
import { getServer } from '../libs/api/mirageServers';
import { useAuth } from "../context/auth";

function Login() {

  //execute getApiUsers function - fetch and create json file of items from mirage server
  getServer();

  // Set token
  const { setAuthTokens } = useAuth();

  //Set state for logged in - default false and set to true if api response ok
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Set useState for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Set username onChange of input
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Set password onChange of input
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Create empty object to setErrors
  const [errors, setErrors] = useState({});

  // Add errors to object for username and password
  const validation = () => {
    let errors = {};
    const usernameErrMsg = 'Please enter Username';
    const passwordErrMsg = 'Please enter Password';
    errors.username = (username.length <= 0) ? usernameErrMsg : '';
    errors.password = (password.length <= 0) ? passwordErrMsg : '';

    setErrors(errors);
    if (!(errors.username === usernameErrMsg) && !(errors.password === passwordErrMsg)) {
      return true;
    }
    else {
      return false;
    }
  };

  // on submit - if api response is ok - set token to allow access to list
  const handleSubmit = (event) => {
    event.preventDefault();
    validation();
    fetch('/api/users')
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response;
    })
    .then((response) => {
      if (validation()) {
        setAuthTokens('MockToken');
        setIsLoggedIn(true);
      }
    })
  };

  if (isLoggedIn) {
    return <Redirect to="/list" />;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <Error>
          {errors.username}
        </Error>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Error>
          {errors.password}
        </Error>
        <SubmitButton
          type="submit"
          value="Sign In"
        />
      </Form>
    </Container>
  );
}
  
export default Login;