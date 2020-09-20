import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { LoginContainer, Container, Button } from './components/Login';
import PrivateRoute from './PrivateRoute';
import Login from "./pages/Login";
import List from "./pages/List";
import { AuthContext } from "./context/auth";

function App(props) {

  // const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const existingTokens = 'existingTokens';

  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
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