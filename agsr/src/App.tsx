import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { Layout } from "./components/Layout";
import { useAppSelector } from "./hooks/stateHooks";
import { Routes } from "./models/routes";
import { Authorization, Main, Profile } from "./pages";

function App() {
  const isAuth: boolean = useAppSelector((state) => state.userReducer.auth);
  return (
    <RoutesWrapper>
      <Route path={Routes.Main} element={<Layout />}>
        <Route index element={<Main />} />
        {isAuth ? (
          <Route path={Routes.Profile} element={<Profile />} />
        ) : (
          <Route path={Routes.Auth} element={<Authorization />} />
        )}

        <Route path="*" element={<Navigate to={Routes.Main} />} />
      </Route>
    </RoutesWrapper>
  );
}

export default App;
