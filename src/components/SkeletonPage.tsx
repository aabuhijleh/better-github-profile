import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SkeletonPage: React.FC = () => {
  return (
    <div style={{ width: "70%" }}>
      <SkeletonTheme color="#202020" highlightColor="#444">
        <h1>
          <Skeleton width={"30%"} />
        </h1>
        <p>
          <Skeleton width={"80%"} height={"20vh"} />
        </p>
        <Skeleton width={"80%"} height={"60vh"} />
      </SkeletonTheme>
    </div>
  );
};
