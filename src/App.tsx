import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LoaderUI } from "./components/Loader/LoaderUI";
import { AppProvider } from "./context";

// const Home = lazy(() => import("./pages/Home/Home"));
const Trivia = lazy(() => import("./pages/Trivia/Trivia"));
const Layout = lazy(() => import("./components/Layout/Layout"));

const App = () => {
  return (
    <Suspense fallback={<LoaderUI show={true} />}>
      <HashRouter>
        <AppProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/trivia" element={<Trivia />} />
            </Routes>
          </Layout>
        </AppProvider>
      </HashRouter>
    </Suspense>
  );
};

export default App;
