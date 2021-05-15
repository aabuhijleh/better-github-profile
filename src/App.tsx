import React from "react";
import { Profile } from "src/components/Profile";
import { Readme } from "src/components/Readme";
import { Footer } from "src/components/Footer";
import { ChangeUsernameButton } from "src/components/ChangeUsernameButton";
import "src/styles/app.scss";

export const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <Profile />
        <Readme />
        <ChangeUsernameButton />
      </div>
      <Footer />
    </>
  );
};
