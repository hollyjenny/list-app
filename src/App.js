import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import { AuthContext } from "./context/auth";

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path = '/login' component={Login} />
          <PrivateRoute path="/list" component={List} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;