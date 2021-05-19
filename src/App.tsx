import React from "react";
import { Footer } from "src/components/Footer";
import { FloatingActionButton } from "src/components/FloatingActionButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "src/pages/Landing";
import { usePersistentStore } from "src/store";
import { defaults } from "src/defaults";
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
          {defaults.showFab && <FloatingActionButton />}
          {defaults.showFooter && <Footer />}
        </Router>
      </div>
    </div>
  );
};
