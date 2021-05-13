import React from "react";
import { BaseSkeleton, CustomSkeleton } from "src/components/BaseSkeleton";

export const ProfileSkeleton: React.FC = () => {
  return (
    <BaseSkeleton className="profile-skeleton-container">
      <CustomSkeleton className="avatar" />
      <h2>
        <CustomSkeleton />
      </h2>
      <h3>
        <CustomSkeleton />
      </h3>
      <p>
        <CustomSkeleton />
      </p>
      <p>
        <CustomSkeleton />
      </p>
      <p>
        <CustomSkeleton />
      </p>
    </BaseSkeleton>
  );
};
