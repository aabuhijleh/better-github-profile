import React from "react";
import { useGithubUser } from "src/utils/useGithubUser";
import { GITHUB_USERNAME } from "src/constants";
import { ProfileSkeleton } from "src/components/Profile/ProfileSkeleton";
import FadeIn from "react-fade-in";
import { IconType } from "react-icons/lib";
import { BsBuilding } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
import { FiMail, FiUsers } from "react-icons/fi";
import { useGithubStarredCount } from "src/utils/useGithubStarredCount";

export const Profile: React.FC = () => {
  const { userResponse, loading } = useGithubUser(GITHUB_USERNAME);
  const starredCount = useGithubStarredCount(GITHUB_USERNAME);

  if (!loading && userResponse!.status >= 400) {
    console.error("unable to get user data", userResponse);
    return <div>Error: unable to get my user data from GitHub</div>;
  }

  const data = userResponse?.data!;

  return (
    <div className="profile-container">
      {loading ? (
        <ProfileSkeleton />
      ) : (
        <>
          <FadeIn>
            <div className="avtar-title-container">
              <img src={data.avatar_url} alt="GitHub avatar" />

              <div className="title-container">
                <h2 className="title">{data.name}</h2>
                <h3 className="subtitle">
                  <AiFillGithub className="subtitle-icon" />
                  <a href={data.html_url}>{data.login}</a>
                </h3>
              </div>
            </div>

            <p className="bio">{data.bio}</p>

            <p className="links">
              <ProfileLink
                Icon={FiUsers}
                link={`${data.html_url}?tab=followers`}
                count={data.followers}
                label="followers"
              />
              <div>
                <b>·</b>
              </div>
              <ProfileLink
                link={`${data.html_url}?tab=following`}
                count={data.following}
                label="following"
              />
              <div>
                <b>·</b>
              </div>
              <ProfileLink
                Icon={AiOutlineStar}
                link={`${data.html_url}?tab=stars`}
                count={starredCount}
              />
            </p>

            <p className="info">
              {data.company && (
                <ProfileInfoDetail Icon={BsBuilding} detail={data.company} />
              )}
              {data.location && (
                <ProfileInfoDetail
                  Icon={TiLocationOutline}
                  detail={data.location}
                />
              )}
              {data.email && (
                <ProfileInfoDetail
                  Icon={FiMail}
                  detail={data.email}
                  href={`mailto:${data.email}`}
                />
              )}
              {data.blog && (
                <ProfileInfoDetail
                  Icon={FiMail}
                  detail={data.blog}
                  href={data.blog}
                />
              )}
              {data.twitter_username && (
                <ProfileInfoDetail
                  Icon={AiFillTwitterCircle}
                  detail={`@${data.twitter_username}`}
                  href={`https://twitter.com/${data.twitter_username}`}
                />
              )}
            </p>
          </FadeIn>
          <hr />
        </>
      )}
    </div>
  );
};

interface ProfileLinkProps {
  Icon?: IconType;
  link: string;
  count: number;
  label?: string;
}

export const ProfileLink: React.FC<ProfileLinkProps> = ({
  Icon,
  link,
  count,
  label,
}) => {
  return (
    <div>
      <a href={link}>
        {Icon && <Icon />} <b>{count}</b> {label}
      </a>
    </div>
  );
};

interface ProfileInfoDetailProps {
  Icon: IconType;
  detail: string;
  href?: string;
}

export const ProfileInfoDetail: React.FC<ProfileInfoDetailProps> = ({
  Icon,
  detail,
  href,
}) => {
  return (
    <div className="info-detail">
      <Icon className="info-icon" />
      {href ? <a href={href}>{detail}</a> : <span>{detail}</span>}
    </div>
  );
};
