import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SkeletonPage: React.FC = () => {
  const duration = 0.6;
  return (
    <div style={{ width: "70%" }}>
      <SkeletonTheme color="#202020" highlightColor="#444">
        <h1>
          <Skeleton width={"30%"} duration={duration} />
        </h1>
        <p>
          <Skeleton width={"80%"} height={"20vh"} duration={duration} />
        </p>
        <Skeleton width={"80%"} height={"60vh"} duration={duration} />
      </SkeletonTheme>
    </div>
  );
};
