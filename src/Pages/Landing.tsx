import React from "react";
import { LandingLayout } from "src/components/LandingLayout";
import { Profile } from "src/components/Profile";
import { Readme } from "src/components/Readme";

export const Landing: React.FC = () => {
  return (
    <LandingLayout>
      <Profile />
      <Readme />
    </LandingLayout>
  );
};
