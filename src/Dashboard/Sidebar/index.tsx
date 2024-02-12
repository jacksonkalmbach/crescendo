import { NavLink } from "react-router-dom";
import { MenuItemText, Sidebar, SidebarMenu, SidebarMenuItem } from "./Styles";
import UserCard from "./UserCard";
import Logo from "../../shared/components/Logo";

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <div>
        <Logo />
        <SidebarMenu>
          {renderMenuItem({ text: "Home", path: "/dashboard" })}
          {renderMenuItem({ text: "Search", path: "search" })}
          {renderMenuItem({ text: "Discover", path: "/" })}
          {renderMenuItem({ text: "Playlists", path: "/" })}
        </SidebarMenu>
      </div>
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
