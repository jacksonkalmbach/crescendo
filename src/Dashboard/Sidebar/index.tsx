import { MenuItemText, Sidebar, SidebarMenu, SidebarMenuItem } from "./Styles";

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <>Logo</>
      <SidebarMenu>
        {renderMenuItem({ text: "Home", path: "/" })}
        {renderMenuItem({ text: "Discover", path: "/" })}
        {renderMenuItem({ text: "Playlists", path: "/" })}
      </SidebarMenu>
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
