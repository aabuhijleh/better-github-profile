import React from "react";
import { BaseSkeleton, CustomSkeleton } from "src/components/BaseSkeleton";

export const ProfileSkeleton: React.FC = () => {
  return (
    <BaseSkeleton className="profile-skeleton-container">
      <div className="avatar-title-skeleton">
        <CustomSkeleton className="avatar" />
        <div className="title">
          <h2>
            <CustomSkeleton />
          </h2>
          <h3>
            <CustomSkeleton />
          </h3>
        </div>
      </div>

      <p>
        <CustomSkeleton />
      </p>
      <p>
        <CustomSkeleton />
      </p>
      <p className="info-skeleton">
        <CustomSkeleton />
      </p>
    </BaseSkeleton>
  );
};
