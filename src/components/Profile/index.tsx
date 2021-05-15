import React, { useEffect } from "react";
import { useGithubUser } from "src/utils/useGithubUser";
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
import { useStore } from "src/store";
import { Emoji } from "src/components/Emoji";

export const Profile: React.FC = () => {
  const username = useStore((state) => state.username);
  const { user, loading, error } = useGithubUser(username);
  const starredCount = useGithubStarredCount(username);

  useEffect(() => {
    document.title = user?.name || "My GitHub Themed Bio";
  }, [user?.name]);

  return (
    <div className="profile-container">
      {loading ? (
        <ProfileSkeleton />
      ) : (
        <>
          {error && <div>{error}</div>}
          {user && (
            <FadeIn>
              <div className="avtar-title-container">
                <img
                  className="avatar"
                  src={user.avatar_url}
                  alt="GitHub avatar"
                />

                <div className="title-container">
                  <h2 className="title">{user.name}</h2>
                  <h3 className="subtitle">
                    <a href={user.html_url}>
                      <AiFillGithub className="subtitle-icon" />
                      {user.login}
                    </a>
                  </h3>
                </div>
              </div>

              <p className="bio">
                <Emoji text={user.bio} />
              </p>

              <div className="links p">
                <ProfileLink
                  Icon={FiUsers}
                  link={`${user.html_url}?tab=followers`}
                  count={user.followers}
                  label="followers"
                />
                <div>
                  <b>·</b>
                </div>
                <ProfileLink
                  link={`${user.html_url}?tab=following`}
                  count={user.following}
                  label="following"
                />
                <div>
                  <b>·</b>
                </div>
                <ProfileLink
                  Icon={AiOutlineStar}
                  link={`${user.html_url}?tab=stars`}
                  count={starredCount}
                />
              </div>

              <div className="info p">
                {user.company && (
                  <ProfileInfoDetail Icon={BsBuilding} detail={user.company} />
                )}
                {user.location && (
                  <ProfileInfoDetail
                    Icon={TiLocationOutline}
                    detail={user.location}
                  />
                )}
                {user.email && (
                  <ProfileInfoDetail
                    Icon={FiMail}
                    detail={user.email}
                    href={`mailto:${user.email}`}
                  />
                )}
                {user.blog && (
                  <ProfileInfoDetail
                    Icon={FiMail}
                    detail={user.blog}
                    href={user.blog}
                  />
                )}
                {user.twitter_username && (
                  <ProfileInfoDetail
                    Icon={AiFillTwitterCircle}
                    detail={`@${user.twitter_username}`}
                    href={`https://twitter.com/${user.twitter_username}`}
                  />
                )}
              </div>
            </FadeIn>
          )}
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
