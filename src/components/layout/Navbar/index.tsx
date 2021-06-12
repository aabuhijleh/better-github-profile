import React from "react";
import styled from "styled-components/macro";
import { linkBlueColor } from "src/styles/theme";
import { Logo } from "src/components/misc/Logo";
import { Link } from "src/components/ui/Link";
import { ModeToggle } from "src/components/layout/Navbar/ModeToggle";
import { SoundToggle } from "src/components/layout/Navbar/SoundToggle";
import { Button } from "src/components/ui/Button";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 5rem;
  font-size: var(--fz-md);

  ${Logo} {
    margin-right: auto;
  }
`;

const NavList = styled.ol`
  display: flex;
  align-items: center;

  margin-right: 1rem;

  list-style: none;
  counter-reset: item 0;

  li {
    margin: 0 5px;
    counter-increment: item 1;
  }

  ${Link} {
    padding: 1rem;
  }

  ${Link}::before {
    margin-right: 0.5rem;
    content: "0" counter(item) ".";
    font-size: var(--fz-sm);
    color: ${linkBlueColor};
  }
`;

const ResumeButton = styled(Button)`
  margin-right: 1rem;
`;

const CustomizationTools = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo size="var(--nav-logo-size)" />
      <NavList>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#jobs">Experience</Link>
        </li>
        <li>
          <Link href="#projects">Work</Link>
        </li>
        <li>
          <Link href="#about">Contact</Link>
        </li>
      </NavList>
      <ResumeButton href="#">Resume</ResumeButton>
      <CustomizationTools>
        <SoundToggle />
        <ModeToggle />
      </CustomizationTools>
    </Nav>
  );
};
