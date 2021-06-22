import React from "react";
import styled from "styled-components/macro";
import { linkBlueColor } from "src/styles/theme";
import { Logo } from "src/components/misc/Logo";
import { Link } from "src/components/ui/Link";
import { ModeToggle } from "src/components/layout/Navbar/ModeToggle";
import { SoundToggle } from "src/components/layout/Navbar/SoundToggle";
import { Sidebar } from "src/components/layout/Navbar/Sidebar";
import { Button } from "src/components/ui/Button";
import { useExtendedDataQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import { parseExtendedData } from "src/utils/parseExtendedData";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--fz-md);
  height: var(--nav-height);
  padding: 0 var(--content-padding);

  .home {
    margin-right: auto;
  }
`;

const NavBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: var(--fz-md);

  @media only screen and (max-width: 1000px) {
    display: none;
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
    font-family: var(--font-mono);
    color: ${linkBlueColor};
  }
`;

const ResumeButton = styled(Button)`
  margin-right: 1rem;
`;

const CustomizationTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;

  & > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const MenuWrapper = styled.div`
  font-size: var(--nav-logo-size);

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Navbar: React.FC = () => {
  const username = useStore((state) => state.username);
  const setSidebarShown = useStore((state) => state.setSidebarShown);
  const { data } = useExtendedDataQuery({
    variables: { username },
  });

  let resume = "#";
  if (data?.repository?.object?.__typename === "Blob") {
    const content = parseExtendedData(data?.repository.object.text as string);
    if (content) {
      resume = content.resume;
    }
  }

  return (
    <Nav>
      <a className="home" href="/">
        <Logo size="var(--nav-logo-size)" />
      </a>
      <NavBody>
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
            <Link href="#contact">Contact</Link>
          </li>
        </NavList>
        <ResumeButton href={resume}>Resume</ResumeButton>
        <CustomizationTools>
          <SoundToggle />
          <ModeToggle />
        </CustomizationTools>
      </NavBody>

      <MenuWrapper onClick={() => setSidebarShown(true)}>
        <BiMenuAltRight />
      </MenuWrapper>

      <Sidebar resume={resume} />
    </Nav>
  );
};
