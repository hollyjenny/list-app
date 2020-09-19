import React from "react";
import { Card, Form, Input, Button } from '../components/Login';

function Login() {
  return (
    <Card>
      <Form>
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
        <Button id='fetch-login'>Sign In</Button>
      </Form>
    </Card>
  );
}

export default Login;