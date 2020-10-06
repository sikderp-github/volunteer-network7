import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Events from './Components/Events/Events';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SelectedTasks from './Components/SelectedTasks/SelectedTasks';
import VolunteerReg from './Components/VolunteerReg/VolunteerReg';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <h3>Email: {loggedInUser.email}</h3>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/events/:email">
            <SelectedTasks />
          </Route>
          <PrivateRoute path="/registration/:title">
            <VolunteerReg />
          </PrivateRoute>
          <PrivateRoute path="/events">
            <Events />
          </PrivateRoute>
          <PrivateRoute path="/tasks">
            <SelectedTasks />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider >
  );
}

export default App;
