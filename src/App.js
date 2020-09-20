import React from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { LoginContainer, Container, Button } from './components/Login';
import PrivateRoute from './PrivateRoute';
import Login from "./pages/Login";
import List from "./pages/List";

function App(props) {
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
          <Container>
            <h1>List Header</h1>
          </Container>
        </div>

        <Route path ='/login' component={Login}/>
        <PrivateRoute path="/list" component={List} />
      </Router>
  );
}

export default App;