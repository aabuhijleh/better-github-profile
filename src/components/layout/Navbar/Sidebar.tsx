import React, { useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { AiOutlineClose } from "react-icons/ai";
import { bodyBgColor, linkBlueColor } from "src/styles/theme";
import { useStore } from "src/store";
import { useMediaQuery } from "@react-hook/media-query";
import { ModeToggle } from "src/components/layout/Navbar/ModeToggle";
import { SoundToggle } from "src/components/layout/Navbar/SoundToggle";
import { Link } from "src/components/ui/Link";
import { Button } from "src/components/ui/Button";

interface SidebarProps {
  show: boolean;
}

const SidebarWrapper = styled.aside<SidebarProps>`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  min-height: 100vh;
  max-height: 100vh;
  width: min(75vw, 40rem);
  font-size: var(--fz-md);

  background-color: ${bodyBgColor};
  box-shadow: var(--shadow);
  overflow: auto;
  padding: 0 var(--content-padding);

  transform: translateX(100vw);
  visibility: hidden;
  transition: var(--transition);

  ${(p) =>
    p.show &&
    css`
      transform: translateX(0vw);
      visibility: visible;
    `}
`;

const Top = styled.div`
  height: var(--nav-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--nav-logo-size);
`;

const CustomizationTools = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const NavList = styled.ol`
  display: flex;
  align-items: center;
  flex-direction: column;

  list-style: none;
  counter-reset: item 0;

  li {
    margin: 5px 0;
    counter-increment: item 1;
    font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
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
  && {
    display: block;
    width: max-content;
    margin: 10% auto;
    margin-bottom: 0;
    padding: 1.5rem 5rem;
  }
`;

export const Sidebar: React.FC = () => {
  const sidebarShown = useStore((state) => state.sidebarShown);
  const setSidebarShown = useStore((state) => state.setSidebarShown);
  const matchesHideMeduaQuery = useMediaQuery(
    "only screen and (min-width: 1000px)"
  );

  useEffect(() => {
    if (matchesHideMeduaQuery) {
      setSidebarShown(false);
    }

    if (sidebarShown) document.body.classList.add("blur");
    else document.body.classList.remove("blur");
  }, [sidebarShown, setSidebarShown, matchesHideMeduaQuery]);

  return (
    <SidebarWrapper show={sidebarShown}>
      <Top>
        <CustomizationTools>
          <SoundToggle />
          <ModeToggle />
        </CustomizationTools>
        <AiOutlineClose onClick={() => setSidebarShown(false)} />
      </Top>

      <NavList onClick={() => setSidebarShown(false)}>
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

      <ResumeButton href={"#"}>Resume</ResumeButton>
    </SidebarWrapper>
  );
};
