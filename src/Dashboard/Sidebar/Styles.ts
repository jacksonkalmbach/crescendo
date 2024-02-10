import styled from "styled-components";
import { color, sizes } from "../../shared/utils/styles";

export const Sidebar = styled.div`
  height: 100vh;
  padding: 24px;
  border-right: 1px solid ${color.borderLight};
  width: ${sizes.secondarySideBarWidth}px;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SidebarMenuItem = styled.div`
  position: relative;
  display: flex;
  padding: 12px 16px;
  border-radius: 9999px;
  &:hover {
    background: ${color.backgroundPrimaryLight};
  }
  &.active {
    color: ${color.primary};
    background: ${color.backgroundPrimaryLight};
    i {
      color: ${color.primary};
    }
  }
  cursor: pointer;
`;

export const MenuItemText = styled.div`
  padding-top: 2px;
`;
