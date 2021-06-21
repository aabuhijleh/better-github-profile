import React from "react";
import {
  HeadingXL,
  SectionHeadingSmall,
} from "src/components/typography/Heading";
import styled from "styled-components/macro";
import { Fade } from "react-awesome-reveal";
import { Paraghraph } from "src/components/typography/Paraghraph";
import { textSecondayColor } from "src/styles/theme";
import { Button } from "src/components/ui/Button";
import { useStore } from "src/store";
import { useExtendedDataQuery } from "src/generated/graphql";
import { parseExtendedData } from "src/utils/parseExtendedData";

const Wrapper = styled.section`
  padding: var(--section-padding) 0;
  margin: 0 auto;
  margin-bottom: 3rem;
  max-width: 70rem;

  text-align: center;

  ${SectionHeadingSmall} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${HeadingXL} {
    margin-bottom: 3rem;
  }

  ${Paraghraph} {
    margin-bottom: 0;
    font-size: var(--fz-xl);
    color: ${textSecondayColor};
  }

  ${Button} {
    margin-top: 5rem;
    font-size: var(--fz-xl);
  }
`;

export const Contact: React.FC = () => {
  const email = useStore((state) => state.email);
  const username = useStore((state) => state.username);
  const { data } = useExtendedDataQuery({
    variables: { username },
  });

  if (data?.repository?.object?.__typename === "Blob") {
    const content = parseExtendedData(data?.repository.object.text as string);
    if (!content) return null;

    const { contactMessage } = content;

    return (
      <Fade>
        <Wrapper id="contact">
          <SectionHeadingSmall>What’s Next?</SectionHeadingSmall>
          <HeadingXL>Get In Touch</HeadingXL>
          <Paraghraph>{contactMessage}</Paraghraph>
          <Button href={`mailto:${email}`}>Say Hello</Button>
        </Wrapper>
      </Fade>
    );
  }

  return null;
};
