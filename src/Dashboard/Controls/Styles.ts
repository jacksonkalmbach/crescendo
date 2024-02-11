import styled from "styled-components";
import { color, sizes } from "../../shared/utils/styles";

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: calc(100% - ${sizes.sideBarWidth}px);
  height: ${sizes.appBottomTab}px;
  border-top: ${sizes.borderWidth}px solid ${color.borderLight};
  background-color: white;
  z-index: 2;
`;
