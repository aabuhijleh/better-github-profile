import React from "react";
import Skeleton, {
  SkeletonTheme,
  SkeletonThemeProps,
} from "react-loading-skeleton";

interface SkeletonPageProps {
  animationDuration?: number;
  theme?: SkeletonThemeProps;
}

export const SkeletonPage: React.FC<SkeletonPageProps> = ({
  animationDuration = 0.6,
  theme = { color: "#202020", highlightColor: "#444" },
}) => {
  return (
    <div className="skeleton-container">
      <SkeletonTheme {...theme}>
        <h1>
          <Skeleton className="skeleton" duration={animationDuration} />
        </h1>
        <p>
          <Skeleton className="skeleton" duration={animationDuration} />
        </p>
        <p>
          <Skeleton className="skeleton" duration={animationDuration} />
        </p>
      </SkeletonTheme>
    </div>
  );
};
