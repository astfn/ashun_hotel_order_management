import { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./router";
import ASAppSideBar from "./components/app-sidebar";
import ASLoading from "./components/loading";
import { ContentWrapper, LeftWrapper, RightWrapper } from "./App-style.js";

const App = () => {
  return (
    <main id="app">
      <HashRouter>
        <ContentWrapper>
          <LeftWrapper>
            <ASAppSideBar />
          </LeftWrapper>
          <RightWrapper>
            <Suspense fallback={<ASLoading />}>{renderRoutes(routes)}</Suspense>
          </RightWrapper>
        </ContentWrapper>
      </HashRouter>
    </main>
  );
};

export default memo(App);
