import React, { FC, Suspense } from "react";
import { Route } from "react-router";
import { RouteConfig } from "../../config/routeConfig";
import { Loading } from "@components/Loading/Loading";

interface RouteRendererProps {
    routes: RouteConfig[];
    fallback?: React.ReactElement;
}

/**
 * Dynamically renders routes from configuration
 * Automatically wraps each route with Suspense
 */
export const RouteRenderer: FC<RouteRendererProps> = ({ routes, fallback = <Loading /> }) => {
    return (
        <>
            {routes.map((route, index) => {
                const Component = route.component;
                return (
                    <Route
                        key={`${route.path}-${index}`}
                        path={route.path}
                        element={
                            <Suspense fallback={fallback}>
                                <Component />
                            </Suspense>
                        }
                    />
                );
            })}
        </>
    );
};
