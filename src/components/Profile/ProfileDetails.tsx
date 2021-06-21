import React, { useEffect } from "react";
import { LinkSecondary, LinkUnderline } from "src/components/ui/Link";
import { useUserQuery } from "src/generated/graphql";
import { useDocumentTitle } from "src/hooks/useDocumentTitle";
import { useStore } from "src/store";
import { borderColor, textSecondayColor } from "src/styles/theme";
import styled, { css } from "styled-components/macro";
import { FiUsers, FiStar, FiMail, FiGithub } from "react-icons/fi";
import { BiBuildings } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { assignUrlPrefix } from "src/utils/assignUrlPrefix";
import { Warning } from "src/components/typography/Warning";
import {
  HeadingSecondary,
  HeadingTertiary,
} from "src/components/typography/Heading";
import "skeleton-screen-css";
import { useRainbow } from "src/hooks/useRainbow";
import { fadeInAnimation } from "src/styles/animations";

const Wrapper = styled.div<{ fade?: boolean }>`
  display: grid;
  align-self: flex-start;
  grid-gap: 1rem;
  font-size: var(--fz-sm);

  ${(p) =>
    p.fade &&
    css`
      & > * {
        animation: ${fadeInAnimation} 0.6s linear;
      }
    `}
`;

const Avatar = styled.img`
  width: 80%;
  border: 1px solid ${borderColor};
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    width: 20%;
  }
`;

const LoginSubtitle = styled(HeadingTertiary)`
  && > a {
    color: ${textSecondayColor};
  }

  & .github-icon {
    font-size: var(--fz-md);
    margin-right: 5px;
  }
`;

const Bio = styled.p`
  font-size: var(--fz-md);
`;

const LinksWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li {
    display: flex;
    align-items: center;
  }

  li:not(:last-child) {
    ::after {
      content: "·";
      margin: 0 5px;
      font-weight: 900;
    }
  }

  svg {
    margin-right: 3px;
    color: ${textSecondayColor};
  }
`;

const DetailsLink = styled(LinkSecondary)`
  &:link,
  &:visited {
    font-weight: 500;
  }
`;

const DetailsWrapper = styled.ul`
  list-style: none;
  line-height: 1;

  li {
    display: flex;
    align-items: center;
  }

  li:not(:first-child) {
    margin-top: 0.8rem;
  }

  svg {
    margin-right: 3px;
    color: ${textSecondayColor};
  }
`;

const StatusWrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  font-size: var(--fz-md);
  color: #fff;

  & > .emoji {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 50%;
  }
`;

export const ProfileDetails: React.FC = () => {
  const username = useStore((state) => state.username);
  const email = useStore((state) => state.email);
  const setEmail = useStore((state) => state.setEmail);
  const colors = useRainbow();

  const { data, loading, error } = useUserQuery({
    variables: { username },
  });

  const user = data?.user;

  useEffect(() => {
    setEmail(user?.email || "");
  }, [user?.email, email, setEmail]);

  useDocumentTitle(user?.name);

  if (user) {
    const colorKeys = Object.keys(colors);
    const transitionDelay = 1000;

    return (
      <Wrapper fade>
        <Avatar src={user.avatarUrl} alt="avatar" />

        {user.status && (
          <StatusWrapper
            style={{
              ...colors,
              transition: `
                      ${colorKeys[0]} ${transitionDelay}ms linear,
                      ${colorKeys[1]} ${transitionDelay}ms linear,
                      ${colorKeys[2]} ${transitionDelay}ms linear
                    `,
              background: `
                      radial-gradient(
                        circle at top left,
                        var(${colorKeys[2]}),
                        var(${colorKeys[1]}),
                        var(${colorKeys[0]})
                      )
                    `,
            }}
          >
            <span
              className="emoji"
              dangerouslySetInnerHTML={{ __html: user.status?.emojiHTML }}
            />
            <span>{user.status?.message}</span>
          </StatusWrapper>
        )}

        <header>
          <HeadingSecondary>{user.name}</HeadingSecondary>
          <LoginSubtitle>
            <LinkUnderline href={user.url}>
              <FiGithub className="github-icon" />
              {user.login}
            </LinkUnderline>
          </LoginSubtitle>
        </header>

        <Bio dangerouslySetInnerHTML={{ __html: user.bioHTML }} />

        <LinksWrapper>
          <li>
            <FiUsers />
            <DetailsLink href={`${user.url}?tab=followers`}>
              <span>{user.followers.totalCount}</span> followers
            </DetailsLink>
          </li>
          <li>
            <DetailsLink href={`${user.url}?tab=following`}>
              <span>{user.following.totalCount}</span> following
            </DetailsLink>
          </li>
          <li>
            <FiStar />
            <DetailsLink href={`${user.url}?tab=stars`}>
              <span>{user.starredRepositories.totalCount}</span>
            </DetailsLink>
          </li>
        </LinksWrapper>

        <DetailsWrapper>
          {user.company && (
            <li>
              <BiBuildings />
              {user.company}
            </li>
          )}
          {user.location && (
            <li>
              <GoLocation />
              {user.location}
            </li>
          )}
          {user.email && (
            <li>
              <FiMail />
              <LinkUnderline href={`mailto:${user.email}`}>
                {user.email}
              </LinkUnderline>
            </li>
          )}
          {user.websiteUrl && (
            <li>
              <BsLink45Deg />
              <LinkUnderline href={assignUrlPrefix(user.websiteUrl)}>
                {user.websiteUrl}
              </LinkUnderline>
            </li>
          )}
          {user.twitterUsername && (
            <li>
              <FaTwitter />
              <LinkUnderline
                href={`https://twitter.com/${user.twitterUsername}`}
              >
                @{user.twitterUsername}
              </LinkUnderline>
            </li>
          )}
        </DetailsWrapper>
      </Wrapper>
    );
  }

  if (loading) {
    return (
      <Wrapper>
        <div
          className="ssc-circle"
          style={{ minWidth: "20rem", width: "20rem", height: "20rem" }}
        ></div>
        <div className="ssc-head-line"></div>
        <div className="ssc-line" style={{ width: "60%" }}></div>
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
        <div className="ssc-line"></div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <Warning>⚠️ Could not get your GitHub profile</Warning>
      </Wrapper>
    );
  }

  return null;
};
