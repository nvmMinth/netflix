import { Home } from "./pages/home";
import { Browse } from "./pages/browse";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { NavigateUser, ProtectedRoute } from "./helpers/redirect";
import useAuth from "./hooks/useAuth";

function App() {
  const { user } = useAuth();
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Signin />} path="/signin" />
        <Route element={<Signup />} path={ROUTES.SIGNUP} />
        <Route
          path="/browse"
          element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route element={<Home />} path={ROUTES.HOME} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
