import styled from "styled-components";
import { color, sizes } from "../../shared/utils/styles";

export const ControlsContainer = styled.div`
  width: 100%;
  height: ${sizes.appBottomTab}px;
  border-top: ${sizes.borderWidth}px solid ${color.borderLight};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
