import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { LoaderUI } from "./components/Loader/LoaderUI";
import { AppProvider } from "./context";

const App = () => {
  return (
    <Suspense fallback={<LoaderUI show={true} />}>
      <HashRouter>
        <AppProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
            </Routes>
          </Layout>
        </AppProvider>
      </HashRouter>
    </Suspense>
  );
};

export default App;
