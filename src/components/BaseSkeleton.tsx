import React from "react";
import Skeleton, {
  SkeletonProps,
  SkeletonTheme,
  SkeletonThemeProps,
} from "react-loading-skeleton";

interface BaseSkeletonProps {
  className?: string;
  theme?: SkeletonThemeProps;
}

export const BaseSkeleton: React.FC<BaseSkeletonProps> = ({
  className,
  theme = { color: "#202020", highlightColor: "#444" },
  children,
}) => {
  return (
    <div className={className}>
      <SkeletonTheme {...theme}>{children}</SkeletonTheme>
    </div>
  );
};

export const CustomSkeleton: React.FC<SkeletonProps> = (props) => {
  return <Skeleton className="skeleton" duration={0.6} {...props} />;
};
