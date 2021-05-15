import React from "react";
import { Footer } from "src/components/Footer";
import { ChangeUsernameButton } from "src/components/ChangeUsernameButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "src/components/Pages/Landing";
import { Resume } from "src/components/Pages/Resume";
import "src/styles/app.scss";

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <ChangeUsernameButton />
      <Footer />
    </Router>
  );
};
