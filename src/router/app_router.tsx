import { Route, Routes } from "react-router-dom";

// import { HeroesRoutes } from "../heroes";
import Login from "../pages/login/login";
import { PrivateRoute } from "./private_route";
import { PublicRoute } from "./public_route";
import NotFound from "../pages/not_found.tsx/not_found";
import HomeLottery from "../pages/home_lotteries/home_lotteries";
import LoterryDetail from "../pages/lottery_detail/loterry_detail";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/2"
          element={
            <PrivateRoute>
              <NotFound />
            </PrivateRoute>
          }
        >
          <Route path="detail/:id" element={<LoterryDetail />} />
        </Route>

        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeLottery />
            </PrivateRoute>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <PrivateRoute>
              <LoterryDetail />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
