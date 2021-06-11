import React from "react";
import styled from "styled-components/macro";
import { ProfileDetails } from "src/components/Profile/ProfileDetails";
import { ProfileReadme } from "src/components/Profile/ProfileReadme";

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const Profile: React.FC = () => {
  return (
    <Wrapper>
      <ProfileDetails />
      <ProfileReadme />
    </Wrapper>
  );
};
