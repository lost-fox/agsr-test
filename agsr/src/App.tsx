import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Routes } from "./models/routes";
import { Authorization, Main, Profile } from "./pages";

function App() {
  return (
    <RoutesWrapper>
      <Route path={Routes.Main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={Routes.Auth} element={<Authorization />} />
        <Route path={Routes.Profile} element={<Profile />} />
        <Route path="*" element={<Navigate to={Routes.Main} />} />
      </Route>
    </RoutesWrapper>
  );
}

export default App;
