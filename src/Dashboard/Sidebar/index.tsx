import { NavLink } from "react-router-dom";
import { MenuItemText, Sidebar, SidebarMenu, SidebarMenuItem } from "./Styles";
import UserCard from "./UserCard";

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarMenu>
        {renderMenuItem({ text: "Home", path: "/dashboard" })}
        {renderMenuItem({ text: "Search", path: "search" })}
        {renderMenuItem({ text: "Discover", path: "/" })}
        {renderMenuItem({ text: "Playlists", path: "/" })}
      </SidebarMenu>
      <UserCard />
    </Sidebar>
  );
};

const renderMenuItem = ({ text, path }: { text: string; path?: string }) => {
  const menuItemProps = { as: NavLink, to: `${path}` };
  return (
    <SidebarMenuItem {...menuItemProps}>
      <MenuItemText>{text}</MenuItemText>
    </SidebarMenuItem>
  );
};

export default DashboardSidebar;
