import React from "react";
import { SectionHeading } from "src/components/typography/Heading";
import { linkBlueColor } from "src/styles/theme";
import styled from "styled-components/macro";
import { Fade } from "react-awesome-reveal";
import { Paraghraph } from "src/components/typography/Paraghraph";
import aboutImage from "src/assets/images/laptop.jpg";

const Wrapper = styled.section`
  padding: 10rem 0;
  padding-top: 20rem;
  margin: 0 auto;
  max-width: 90rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 5rem;
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
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
  return (
    <Fade>
      <Wrapper id="about">
        <SectionHeading>About Me</SectionHeading>
        <ContentWrapper>
          <div>
            <Paraghraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis tempora quia ea inventore id repudiandae laudantium
              provident incidunt? Tempora commodi incidunt laboriosam molestiae
              ducimus ipsa, praesentium facere corrupti aliquid nobis.
            </Paraghraph>

            <Paraghraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              nesciunt vero dolorum delectus aspernatur. Doloribus magni veniam
              aperiam aliquid asperiores aspernatur officiis reiciendis beatae,
              omnis sit cumque temporibus quis voluptate.
            </Paraghraph>

            <Paraghraph>
              Here are a few technologies I've been working with recently:
            </Paraghraph>

            <TechnologiesList>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Electron</li>
              <li>Styled Components</li>
              <li>GraphQL</li>
            </TechnologiesList>
          </div>

          <AboutImage src={aboutImage} alt="laptop & coffee" />
        </ContentWrapper>
      </Wrapper>
    </Fade>
  );
};
