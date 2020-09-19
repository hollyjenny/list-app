import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { LoginContainer, Card, Button } from '../components/Login';
import Login from "./Login";

function Home(props) {
  return (
    <Router>
      <div>
        <LoginContainer>
          <Link to="/login">
            <Button renderAs="Link">
              <span>Login</span>
            </Button>
          </Link>
        </LoginContainer>
        <Card>
          <h1>List Header</h1>
        </Card>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default Home;