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

const Wrapper = styled.section`
  padding: 10rem 0;
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

  return (
    <Fade>
      <Wrapper id="contact">
        <SectionHeadingSmall>What’s Next?</SectionHeadingSmall>
        <HeadingXL>Get In Touch</HeadingXL>
        <Paraghraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          necessitatibus. Alias, explicabo soluta sit tempore vel ducimus
          corrupti nisi eveniet possimus libero aut eos odit? Recusandae minus
          molestiae enim corrupti.
        </Paraghraph>
        <Button href={`mailto:${email}`}>Say Hello</Button>
      </Wrapper>
    </Fade>
  );
};
