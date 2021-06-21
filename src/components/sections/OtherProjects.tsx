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
import { useExtendedDataQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import { parseExtendedData } from "src/utils/parseExtendedData";

const Wrapper = styled.section`
  padding: var(--section-padding) 0;
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

const Project = styled.div`
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
  const username = useStore((state) => state.username);
  const { data } = useExtendedDataQuery({
    variables: { username },
  });

  if (data?.repository?.object?.__typename === "Blob") {
    const content = parseExtendedData(data?.repository.object.text as string);
    if (!content) return null;

    const { otherProjects } = content;

    return (
      <Fade>
        <Wrapper>
          <Heading>Other Noteworthy Projects</Heading>
          <ProjectsGrid>
            {otherProjects.map((project, idx) => (
              <li key={idx}>
                <Project>
                  <header>
                    <ProjectTop>
                      <div className="folder">
                        <FiFolder />
                      </div>
                      <ProjectLinks>
                        {project.repoUrl && (
                          <Link href={project.repoUrl}>
                            <FiGithub />
                          </Link>
                        )}
                        {project.externalUrl && (
                          <Link href={project.externalUrl}>
                            <FiExternalLink />
                          </Link>
                        )}
                      </ProjectLinks>
                    </ProjectTop>

                    <ProjectTitle className="project-title">
                      <Link href={project.externalUrl}>{project.name}</Link>
                    </ProjectTitle>

                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                  </header>

                  <footer>
                    <ProjectTechList>
                      {project.technologies.map((technology, idx) => (
                        <li key={idx}>{technology}</li>
                      ))}
                    </ProjectTechList>
                  </footer>
                </Project>
              </li>
            ))}
          </ProjectsGrid>
        </Wrapper>
      </Fade>
    );
  }

  return null;
};
