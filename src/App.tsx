import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LoaderUI } from "./components/Loader/LoaderUI";
import { AppProvider } from "./context";
import { Layout } from "./components/Layout/Layout";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicOnlyRoute } from "./components/PublicOnlyRoute/PublicOnlyRoute";

// const Home = lazy(() => import("./pages/Home/Home"));
const Landing = lazy(() => import("./pages/Landing/Landing"));
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Trivia = lazy(() => import("./pages/Trivia/Trivia"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  return (
    <Suspense fallback={<LoaderUI show={true} />}>
      <HashRouter>
        <AppProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/login"
                element={
                  <PublicOnlyRoute>
                    <Login />
                  </PublicOnlyRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <PublicOnlyRoute>
                    <SignUp />
                  </PublicOnlyRoute>
                }
              />
              <Route
                path="/trivia"
                element={
                  <PrivateRoute>
                    <Trivia />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </AppProvider>
      </HashRouter>
    </Suspense>
  );
};

export default App;
