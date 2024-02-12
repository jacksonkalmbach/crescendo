import styled from "styled-components";
import { color, sizes } from "../../shared/utils/styles";
import { bodyTextStyle } from "../../shared/utils/fonts";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-right: ${sizes.borderWidth}px solid ${color.borderLight};
  width: ${sizes.sideBarWidth}px;
`;

export const SidebarMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2px;
`;

export const SidebarMenuItem = styled.div`
  display: flex;
  padding: 12px 16px;
  border-radius: 9999px;

  &:hover {
    background: ${color.backgroundHoverPrimary};
  }
  cursor: pointer;
`;

export const MenuItemText = styled.a`
  padding-top: 2px;
  text-decoration: none;
  ${bodyTextStyle}
`;
