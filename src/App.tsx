import React from "react";
import { Footer } from "src/components/Footer";
import { FloatingActionButton } from "src/components/FloatingActionButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "src/Pages/Landing";
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
          <FloatingActionButton />
          <Footer />
        </Router>
      </div>
    </div>
  );
};
