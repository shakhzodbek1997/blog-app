import React from "react";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from './pages/home/Home'

export default function App() {
  return (
    <div>
      <TopBar />
      <Register />
    </div>
  );
}