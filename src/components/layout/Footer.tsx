import React from "react";
import { Link } from "src/components/ui/Link";
import { textSecondayColor } from "src/styles/theme";
import styled from "styled-components/macro";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 7rem;
  padding: 2.5rem;
  text-align: center;
  color: ${textSecondayColor};
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>
        Created with&nbsp;
        <Link href="https://github.com/aabuhijleh/better-github-profile">
          Better GitHub Profile
        </Link>
      </div>
      <div>
        By&nbsp;
        <Link href="https://github.com/aabuhijleh">Abdurrahman Abu-Hijleh</Link>
      </div>
    </StyledFooter>
  );
};
