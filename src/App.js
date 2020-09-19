import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import { AuthContext } from "./context/auth";
import { Server } from "miragejs"

/**
 * @description create mirage api with usernames and passwords
 */
let server = new Server()
server.get("/api/users", { users: [
  { name: "LukeGreene", pass: "Duggee" },
  { name: "HollyGreene", pass: "Cake" },
  { name: "SteveGreene", pass: "Football" }
] })

function App(props) {
  /**
   * @description fetch and create json file of users from mirage server
   */
  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
      })
  }, [])

  console.log(users);
  
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