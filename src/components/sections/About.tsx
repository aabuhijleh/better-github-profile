import React from "react";
import { SectionHeading } from "src/components/typography/Heading";
import { linkBlueColor } from "src/styles/theme";
import styled from "styled-components/macro";
import { Fade } from "react-awesome-reveal";
import { Paraghraph } from "src/components/typography/Paraghraph";
import { useExtendedDataQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import { parseExtendedData } from "src/utils/parseExtendedData";

const Wrapper = styled.section`
  padding: var(--section-padding) 0;
  margin: 0 auto;
  max-width: 90rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 5rem;

  @media only screen and (max-width: 768px) {
    display: block;
    & > *:not(:last-child) {
      margin-bottom: 5rem;
    }
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);

  @media only screen and (max-width: 768px) {
    max-width: 50rem;
    display: block;
    margin: 0 auto;
  }

  @media only screen and (max-width: 500px) {
    max-width: 30rem;
  }
`;

const TechnologiesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(14rem, 20rem));
  padding: 0px;
  margin: 2rem 0px 0px;
  overflow: hidden;
  list-style: none;
  font-size: var(--fz-sm);

  & > li::before {
    margin-right: 1rem;
    content: "▹";
    color: ${linkBlueColor};
    font-size: var(--fz-sm);
    line-height: 1.2rem;
  }
`;

export const About: React.FC = () => {
  const username = useStore((state) => state.username);
  const { data } = useExtendedDataQuery({
    variables: { username },
  });

  if (data?.repository?.object?.__typename === "Blob") {
    const content = parseExtendedData(data?.repository.object.text as string);
    if (!content) return null;

    const { about } = content;

    return (
      <Fade>
        <Wrapper id="about">
          <SectionHeading>About Me</SectionHeading>
          <ContentWrapper>
            <div>
              {about.paragraphs.map((p, idx) => (
                <Paraghraph key={idx}>{p}</Paraghraph>
              ))}

              <Paraghraph>
                Here are a few technologies I've been working with recently:
              </Paraghraph>

              <TechnologiesList>
                {about.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </TechnologiesList>
            </div>

            <AboutImage src={about.imageUrl} alt="about image" />
          </ContentWrapper>
        </Wrapper>
      </Fade>
    );
  }

  return null;
};
