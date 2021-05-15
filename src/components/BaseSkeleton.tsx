import React from "react";
import Skeleton, { SkeletonProps, SkeletonTheme } from "react-loading-skeleton";
import { usePersistentStore } from "src/store";

interface BaseSkeletonProps {
  className?: string;
}

export const BaseSkeleton: React.FC<BaseSkeletonProps> = ({
  className,
  children,
}) => {
  const theme = usePersistentStore((state) => state.theme);
  const skeletonTheme =
    theme === "dark" ? { color: "#202020", highlightColor: "#444" } : undefined;
  return (
    <div className={className}>
      <SkeletonTheme {...skeletonTheme}>{children}</SkeletonTheme>
    </div>
  );
};

export const CustomSkeleton: React.FC<SkeletonProps> = (props) => {
  return <Skeleton className="skeleton" duration={0.6} {...props} />;
};
