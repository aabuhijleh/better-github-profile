import React from "react";
import { BaseSkeleton, CustomSkeleton } from "src/components/BaseSkeleton";

export const ProfileSkeleton: React.FC = () => {
  return (
    <BaseSkeleton className="profile-skeleton-container">
      <CustomSkeleton circle={true} height={50} width={50} />
    </BaseSkeleton>
  );
};
