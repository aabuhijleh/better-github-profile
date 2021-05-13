import React from "react";
import { useGithubUser } from "src/utils/useGithubUser";
import {
  GITHUB_EMAIL,
  GITHUB_STARRED_COUNT,
  GITHUB_USERNAME,
} from "src/constants";
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

export const Profile: React.FC = () => {
  const { userResponse, loading } = useGithubUser(GITHUB_USERNAME);

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
            <div>·</div>
            <ProfileLink
              link={`${data.html_url}?tab=following`}
              count={data.following}
              label="following"
            />
            <div>·</div>
            <ProfileLink
              Icon={AiOutlineStar}
              link={`${data.html_url}?tab=stars`}
              count={GITHUB_STARRED_COUNT}
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
            {GITHUB_EMAIL && (
              <ProfileInfoDetail Icon={FiMail} detail={GITHUB_EMAIL} email />
            )}
            {data.twitter_username && (
              <ProfileInfoDetail
                Icon={AiFillTwitterCircle}
                detail={data.twitter_username}
              />
            )}
          </p>
          <hr />
        </FadeIn>
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
  email?: boolean;
}

export const ProfileInfoDetail: React.FC<ProfileInfoDetailProps> = ({
  Icon,
  detail,
  email,
}) => {
  return (
    <div className="info-detail">
      <Icon className="info-icon" />
      {email ? (
        <a href={`mailto:${detail}`}>{detail}</a>
      ) : (
        <span>{detail}</span>
      )}
    </div>
  );
};
