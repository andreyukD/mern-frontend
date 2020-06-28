import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/places/new" exact>
            <NewPlace></NewPlace>
          </Route>
          <Route path="/" exact>
            <Users></Users>
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
