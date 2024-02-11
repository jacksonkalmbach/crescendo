import { DashboardContainer } from "./Styles";
import { Routes, Route } from "react-router-dom";
import DashboardSidebar from "./Sidebar";
import Search from "./Search";
import NowPlaying from "./NowPlaying";
import Controls from "./Controls";
import Home from "./Home";
import { sizes } from "../shared/utils/styles";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardSidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            height: `calc(100vh - ${sizes.appBottomTab})`,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="playlists" element={<>Playlists</>} />
            <Route path="settings" element={<>Settings</>} />
          </Routes>
          <NowPlaying />
        </div>
        <Controls />
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
