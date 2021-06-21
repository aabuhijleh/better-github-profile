import React from "react";
import styled from "styled-components/macro";
import { ProfileDetails } from "src/components/Profile/ProfileDetails";
import { ProfileReadme } from "src/components/Profile/ProfileReadme";

const Wrapper = styled.main`
  padding-bottom: 10rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 3rem;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Profile: React.FC = () => {
  return (
    <Wrapper>
      <ProfileDetails />
      <ProfileReadme />
    </Wrapper>
  );
};
