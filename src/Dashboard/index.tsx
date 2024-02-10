import React from "react";
import { DashboardContainer } from "./Styles";
import { Routes, Route } from "react-router-dom";
import DashboardSidebar from "./Sidebar";
import Search from "./Search";
import NowPlaying from "./NowPlaying";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardSidebar />
      <Routes>
        <Route path="search" element={<Search />} />
        <Route path="playlists" element={<>Playlists</>} />
        <Route path="settings" element={<>Settings</>} />
      </Routes>
      <NowPlaying />
    </DashboardContainer>
  );
};

export default Dashboard;
