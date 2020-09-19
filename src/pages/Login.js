import React from "react";
import { Card, Logo, Form, Input, Button } from '../components/Login';

function Login() {
  return (
    <Card>
      <Form>
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
      </Form>
    </Card>
  );
}

export default Login;