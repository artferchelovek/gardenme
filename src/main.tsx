import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout.tsx";
import "./index.css";
import "./m3styles/light.css";
import Auth from "./pages/Auth/Auth.tsx";
import Device from "./pages/Device/Device.tsx";
import Main from "./pages/Main/Main.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import ProtectedRoute from "./utils/ProtectedRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/auth"} element={<Auth />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Main />} />
            <Route path={"/device"} element={<Device />} />
            <Route path={"/profile"} element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
