import React from "react";
import { SectionHeading } from "src/components/typography/Heading";
import styled from "styled-components/macro";
import { Fade } from "react-awesome-reveal";
import { LinkUnderline } from "src/components/ui/Link";
import { linkBlueColor, textSecondayColor } from "src/styles/theme";
import { useExtendedDataQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import { parseExtendedData } from "src/utils/parseExtendedData";

const Wrapper = styled.section`
  padding: 10rem 0;
  margin: 0 auto;
  max-width: 70rem;
`;

const JobWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }
`;

const Company = styled.h2`
  margin-bottom: 5px;
  font-size: var(--fz-xxl);
  font-weight: 500;
  line-height: 1;

  & > span {
    color: ${linkBlueColor};
  }

  && a {
    color: ${linkBlueColor};
  }
`;

const TimePeriod = styled.h3`
  margin-bottom: 2.2rem;
  color: ${textSecondayColor};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
`;

const AccomplishmentList = styled.ul`
  list-style: none;
  font-size: var(--fz-lg);

  & > li {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    display: flex;
    line-height: 1;
  }

  & > li::before {
    margin-right: 2rem;
    margin-top: 5px;
    content: "▹";
    color: ${linkBlueColor};
    font-size: 1.8rem;
    line-height: 1.2rem;
  }
`;

export const Jobs: React.FC = () => {
  const username = useStore((state) => state.username);
  const { data } = useExtendedDataQuery({
    variables: { username },
  });

  if (data?.repository?.object?.__typename === "Blob") {
    const content = parseExtendedData(data?.repository.object.text as string);
    if (!content) return null;

    const { jobs } = content;

    return (
      <Fade>
        <Wrapper id="jobs">
          <SectionHeading>Where I’ve Worked</SectionHeading>

          {jobs.map((job, idx) => (
            <JobWrapper key={idx}>
              <Company>
                {job.title}
                <span>
                  &nbsp;@&nbsp;
                  <LinkUnderline href={job.companyUrl}>
                    {job.company}
                  </LinkUnderline>
                </span>
              </Company>
              <TimePeriod>
                {job.date.from} - {job.date.to}
              </TimePeriod>

              <AccomplishmentList>
                {job.accomplishments.map((accomplishment, idx) => (
                  <li key={idx}>{accomplishment}</li>
                ))}
              </AccomplishmentList>
            </JobWrapper>
          ))}
        </Wrapper>
      </Fade>
    );
  }

  return null;
};
