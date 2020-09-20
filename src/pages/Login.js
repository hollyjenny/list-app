import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Form, Input, Button } from '../components/Login';
import PrivateRoute from '../PrivateRoute';
//import { getApiUsers } from '../libs/api/mirageServers';
import { AuthContext } from "../context/auth";
import List from "../pages/List";

function Login() {

  // /**
  // * @description execute getApiUsers function - mirage api with list items
  // */
  // getApiUsers();

  // /**
  //  * @description fetch and create json file of items from mirage server
  //  */
  // let [users, setUsers] = useState([])

  // useEffect(() => {
  //   fetch('/api/users')
  //   .then(response => {
  //     if (!response.ok) throw Error(response.statusText);
  //     return response.json();
  //   })
  //     .then((json) => {
  //       setUsers(json.users);
  //     })
  // }, []);

  const [isbuttonClicked, setIsbuttonClicked] = useState(false);


  return (
    // AuthContext Value to be set to default false when logic is in place
    <AuthContext.Provider value={true}>
      <Router>
      {!isbuttonClicked &&
        <Container>
          <Form>
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />
            <Link to="/list">
              <Button
                renderAs="Link"
                id='fetch-login'
                onClick={() => {
                  // set auth context to true - compare to json
                  setIsbuttonClicked(true);
                  console.log('clicked');
                }}>
                Sign In
              </Button>
            </Link>
          </Form>
        </Container>
        }
        {isbuttonClicked &&
          <PrivateRoute path="/list" component={List} />
        }
      </Router>
    </AuthContext.Provider>

    );
  }
  
  export default Login;