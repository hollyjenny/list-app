import React, { useState, useEffect } from "react"
import { Container, Form, Input, Button } from '../components/Login';
import { getApiUsers } from '../libs/api/users';

function Login() {

  /**
  * @description execute getApiUsers function - mirage api with list items
  */
  getApiUsers();

  /**
   * @description fetch and create json file of items from mirage server
   */
  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
      })
  }, []);

  console.log(users);

  return (
    <Container>
      <Form>
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
        <Button id='fetch-login'>Sign In</Button>
      </Form>
    </Container>
  );
}

export default Login;