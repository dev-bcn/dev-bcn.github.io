import React, { Suspense } from "react";
import { CookieConsent } from "react-cookie-consent";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, Routes } from "react-router";
import { styled } from "styled-components";

import { Footer } from "@components/Footer/Footer";
import { Loading } from "@components/Loading/Loading";
import { Navigation } from "@components/Navigation/Navigation";
import { ScrollToTop } from "@components/ScrollToTop/ScrollToTop";
import { getAllRoutes } from "@config/routeConfig";
import { ROUTE_COOKIES } from "@constants/routes";
import { Color } from "@styles/colors";

import type { FC } from "react";

const StyledAppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const isDevBcnCookieSet = document.cookie
  .split("; ")
  .some((row) => row.startsWith("DevBcnCookie="));

const RenderCookie = () => (
  <CookieConsent
    debug={true}
    enableDeclineButton={true}
    cookieName="DevBcnCookie"
    style={{ backgroundColor: Color.DARK_BLUE }}
    buttonStyle={{
      backgroundColor: Color.LIGHT_BLUE,
      color: Color.WHITE,
      fontWeight: "bold",
    }}
    declineButtonStyle={{
      fontWeight: "bold",
      backgroundColor: Color.MAGENTA,
    }}
  >
    This website uses cookies to enhance the user experience.{" "}
    <Link to={ROUTE_COOKIES} style={{ color: "white", fontWeight: "bold" }}>
      Read here
    </Link>
  </CookieConsent>
);

const App: FC<React.PropsWithChildren<unknown>> = () => {
  const queryClient = new QueryClient();
  const routes = getAllRoutes();

  return (
    <StyledAppWrapper className="AppWrapperAll">
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          {routes.map((route, index) => {
            const Component = route.component;
            return (
              <Route
                key={`${route.path}-${index}`}
                path={route.path}
                element={
                  <Suspense fallback={<Loading />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
        {!isDevBcnCookieSet && <RenderCookie />}
        <Footer />
      </QueryClientProvider>
    </StyledAppWrapper>
  );
};

export default App;
