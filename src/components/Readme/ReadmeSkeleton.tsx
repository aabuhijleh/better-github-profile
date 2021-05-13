import React from "react";
import { BaseSkeleton, CustomSkeleton } from "src/components/BaseSkeleton";

export const ReadmeSkeleton: React.FC = () => {
  return (
    <BaseSkeleton className="readme-skeleton-container">
      <h1>
        <CustomSkeleton />
      </h1>
      <p>
        <CustomSkeleton />
      </p>
      <p>
        <CustomSkeleton />
      </p>
    </BaseSkeleton>
  );
};
