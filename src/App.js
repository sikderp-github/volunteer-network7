import React, { createContext, useEffect, useState } from 'react';
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

export const UserContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    fetch('https://fierce-tundra-78625.herokuapp.com/events')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, tasks, setTasks }} >
      <h5>Welcome, Mr. {loggedInUser.name} !</h5>
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
          <PrivateRoute path="/registration/:id">
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
