import React from "react";
import { Profile } from "src/components/Profile";
import { Readme } from "src/components/Readme";
import "src/styles/app.scss";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Profile />
      <hr className="separator" />
      <Readme />
    </div>
  );
};
