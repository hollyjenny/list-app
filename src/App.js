import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { LoginContainer, Container, Button } from './components/styledComponents';
import PrivateRoute from './PrivateRoute';
import Login from "./pages/Login";
import List from "./pages/List";
import { AuthContext } from "./context/auth";

function App(props) {

  // Set Tokens for login authentition
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
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
              <h1>Holly Greene List-App</h1>
            </Container>
          </div>

          <Route path ='/login' component={Login}/>
          <PrivateRoute path="/list" component={List} />
        </Router>
      </AuthContext.Provider>
  );
}

export default App;