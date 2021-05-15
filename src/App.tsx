import React from "react";
import { Footer } from "src/components/Footer";
import { EditPageActions } from "src/components/EditPageActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "src/components/Pages/Landing";
import { usePersistentStore } from "src/store";
import "src/styles/app.scss";

export const App: React.FC = () => {
  const theme = usePersistentStore((state) => state.theme);

  return (
    <div className={`theme--${theme}`}>
      <div className="base">
        <Router>
          <Switch>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
          <EditPageActions />
          <Footer />
        </Router>
      </div>
    </div>
  );
};
