import React, { ReactNode } from "react";
import { StyledDashboardRouteContainer } from "./Styles";

const DashboardRouteContainer = ({ children }: { children: ReactNode }) => {
  return (
    <StyledDashboardRouteContainer>{children}</StyledDashboardRouteContainer>
  );
};

export default DashboardRouteContainer;
