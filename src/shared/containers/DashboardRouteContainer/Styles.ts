import styled from "styled-components";
import { sizes } from "../../utils/styles";

export const StyledDashboardRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${sizes.appBottomTab}px);
  flex-grow: 1;
  box-sizing: border-box;
  padding: 40px 40px 0 40px;
  gap: 32px;
`;
