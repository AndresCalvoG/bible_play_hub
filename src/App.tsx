import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LoaderUI } from "./components/Loader/LoaderUI";
import { AppProvider } from "./context";
import { Layout } from "./components/Layout/Layout";

// const Home = lazy(() => import("./pages/Home/Home"));
const Landing = lazy(() => import("./pages/Landing/Landing"));
const Login = lazy(() => import("./pages/Login/Login"));
const Trivia = lazy(() => import("./pages/Trivia/Trivia"));

const App = () => {
  return (
    <Suspense fallback={<LoaderUI show={true} />}>
      <HashRouter>
        <AppProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/trivia" element={<Trivia />} />
            </Routes>
          </Layout>
        </AppProvider>
      </HashRouter>
    </Suspense>
  );
};

export default App;
