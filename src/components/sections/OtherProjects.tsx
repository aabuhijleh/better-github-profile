import React from "react";
import { Heading } from "src/components/typography/Heading";
import styled from "styled-components/macro";
import { Fade } from "react-awesome-reveal";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { Link } from "src/components/ui/Link";
import {
  borderColor,
  linkBlueColor,
  textColor,
  textSecondayColor,
} from "src/styles/theme";

const Wrapper = styled.section`
  padding: 10rem 0;
  margin: 0 auto;
  max-width: 100rem;

  ${Heading} {
    display: flex;
    justify-content: center;
  }
`;

const ProjectsGrid = styled.ul`
  position: relative;
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 1.5rem;

  list-style: none;
`;

const Project = styled.a`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
  height: 100%;
  padding: 3.2rem 2.8rem;
  border-radius: var(--border-radius);
  background-color: ${borderColor};
  box-shadow: var(--shadow);
  transition: var(--transition);

  text-decoration: none;
  color: ${textColor};

  &:hover {
    transform: translateY(-5px);

    .project-title > a {
      color: ${linkBlueColor};
    }
  }
`;

const ProjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  .folder {
    color: ${linkBlueColor};

    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`;

const ProjectLinks = styled.div`
  a svg {
    width: 2.2rem;
    height: 2.2rem;
    margin-left: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: var(--fz-xxl);
`;

const ProjectDescription = styled.p`
  font-size: var(--fz-sm);
`;

const ProjectTechList = styled.ul`
  margin-top: 2rem;
  display: flex;
  list-style: none;
  font-size: var(--fz-sm);
  color: ${textSecondayColor};

  & li {
    margin-right: 1.5rem;
  }
`;

export const OtherProjects: React.FC = () => {
  return (
    <Fade>
      <Wrapper>
        <Heading>Other Noteworthy Projects</Heading>
        <ProjectsGrid>
          <li>
            <Project href="https://www.npmjs.com/package/osw">
              <header>
                <ProjectTop>
                  <div className="folder">
                    <FiFolder />
                  </div>
                  <ProjectLinks>
                    <Link href="https://github.com/aabuhijleh/osw">
                      <FiGithub />
                    </Link>
                    <Link href="https://www.npmjs.com/package/osw">
                      <FiExternalLink />
                    </Link>
                  </ProjectLinks>
                </ProjectTop>

                <ProjectTitle className="project-title">
                  <Link href="https://www.npmjs.com/package/osw">osw</Link>
                </ProjectTitle>

                <ProjectDescription>
                  During the COVID-19 lockdown we all had to work from home. To
                  make things worse, in our company, we had to fill out a form
                  every day and use a slow, outdated website to submit it. With
                  this tool, me and dozens of my coworkers do this chore in 5
                  seconds instead of 5 minutes
                </ProjectDescription>
              </header>

              <footer>
                <ProjectTechList>
                  <li>Node.js</li>
                  <li>Yargs</li>
                  <li>Inquirer.js</li>
                </ProjectTechList>
              </footer>
            </Project>
          </li>

          <li>
            <Project href="https://www.npmjs.com/package/electron-selected-text">
              <header>
                <ProjectTop>
                  <div className="folder">
                    <FiFolder />
                  </div>
                  <ProjectLinks>
                    <Link href="https://github.com/aabuhijleh/electron-selected-text">
                      <FiGithub />
                    </Link>
                    <Link href="https://www.npmjs.com/package/electron-selected-text">
                      <FiExternalLink />
                    </Link>
                  </ProjectLinks>
                </ProjectTop>

                <ProjectTitle className="project-title">
                  <Link href="https://www.npmjs.com/package/electron-selected-text">
                    electron-selected-text
                  </Link>
                </ProjectTitle>

                <ProjectDescription>
                  A cross-platform utility that enables retrieving selected text
                  from any application. It achieves this by using RobotJS to
                  synthesize a CommandOrControl+C keyboard shortcut then getting
                  the value from the clipboard
                </ProjectDescription>
              </header>

              <footer>
                <ProjectTechList>
                  <li>Electron</li>
                  <li>RobotJS</li>
                </ProjectTechList>
              </footer>
            </Project>
          </li>

          <li>
            <Project href="https://www.npmjs.com/package/keylogger.js">
              <header>
                <ProjectTop>
                  <div className="folder">
                    <FiFolder />
                  </div>
                  <ProjectLinks>
                    <Link href="https://github.com/aabuhijleh/keylogger.js">
                      <FiGithub />
                    </Link>
                    <Link href="https://www.npmjs.com/package/keylogger.js">
                      <FiExternalLink />
                    </Link>
                  </ProjectLinks>
                </ProjectTop>

                <ProjectTitle className="project-title">
                  <Link href="https://www.npmjs.com/package/keylogger.js">
                    keylogger.js
                  </Link>
                </ProjectTitle>

                <ProjectDescription>
                  A Node.js keylogger for Windows and macOS. It works by
                  registering native low level keyboard hook to be able to
                  capture keyboard events. node-addon-api is used to bridge
                  between the native and JavaScript worlds
                </ProjectDescription>
              </header>

              <footer>
                <ProjectTechList>
                  <li>Node.js</li>
                  <li>C++</li>
                </ProjectTechList>
              </footer>
            </Project>
          </li>
        </ProjectsGrid>
      </Wrapper>
    </Fade>
  );
};
