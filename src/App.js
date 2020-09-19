import React from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { LoginContainer, Container, Button } from './components/Login';
import PrivateRoute from './PrivateRoute';
import Login from "./pages/Login";
import List from "./pages/List";
import { AuthContext } from "./context/auth";

function App(props) {
  return (
    // AuthContext Value to be set to default false when logic is in place
    <AuthContext.Provider value={true}>
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
    </AuthContext.Provider>
  );
}

export default App;