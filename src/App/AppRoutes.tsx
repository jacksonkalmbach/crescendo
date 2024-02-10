import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<>Settings</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
