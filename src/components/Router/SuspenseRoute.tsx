import React, { Suspense } from "react";
import { Route, RouteProps } from "react-router";

import { Loading } from "@components/Loading/Loading";

import type { FC, ReactElement } from "react";

interface SuspenseRouteProps {
  path: string;
  element: ReactElement;
  fallback?: ReactElement;
}

/**
 * Wrapper component that combines Route with Suspense
 * Eliminates the need to manually wrap every route with React.Suspense
 */
export const SuspenseRoute: FC<SuspenseRouteProps> = ({
  path,
  element,
  fallback = <Loading />,
}) => {
  return (
    <Route
      path={path}
      element={<Suspense fallback={fallback}>{element}</Suspense>}
    />
  );
};
