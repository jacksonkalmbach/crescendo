import CircleImage from "../../shared/components/CircleImage";
import { MenuItemText, Sidebar, SidebarMenu, SidebarMenuItem } from "./Styles";
import UserCard from "./UserCard";

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarMenu>
        {renderMenuItem({ text: "Home", path: "/" })}
        {renderMenuItem({ text: "Search", path: "/" })}
        {renderMenuItem({ text: "Discover", path: "/" })}
        {renderMenuItem({ text: "Playlists", path: "/" })}
      </SidebarMenu>
      <UserCard />
    </Sidebar>
  );
};

const renderMenuItem = ({ text, path }: { text: string; path?: string }) => {
  return (
    <SidebarMenuItem>
      <MenuItemText>{text}</MenuItemText>
    </SidebarMenuItem>
  );
};

export default DashboardSidebar;
