import { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./router";
import ASAppHeader from "./components/app-header";
import ASAppFooter from "./components/app-footer";
import ASLoading from "./components/loading";
const App = () => {
  return (
    <main id="app">
      <HashRouter>
        <ASAppHeader />
        <Suspense fallback={<ASLoading />}>{renderRoutes(routes)}</Suspense>
        <ASAppFooter />
      </HashRouter>
    </main>
  );
};

export default memo(App);
