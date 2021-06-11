import React from "react";
import styled from "styled-components/macro";
import { linkBlueColor } from "src/styles/theme";
import { Logo } from "src/components/Logo";
import { Link } from "src/components/Link";
import { ModeToggle } from "src/components/ModeToggle";
import { SoundToggle } from "src/components/SoundToggle";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 5rem;
  font-size: var(--fz-xs);

  ${Logo} {
    margin-right: auto;
  }
`;

const NavList = styled.ol`
  display: flex;
  align-items: center;

  margin-right: 2rem;

  list-style: none;
  counter-reset: item 0;

  li {
    margin: 0 5px;
    counter-increment: item 1;
  }

  ${Link}::before {
    margin-right: 0.5rem;
    content: "0" counter(item) ".";
    font-size: var(--fz-xxs);
    color: ${linkBlueColor};
  }
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
      <ModeToggle />
      <SoundToggle />
    </Nav>
  );
};
