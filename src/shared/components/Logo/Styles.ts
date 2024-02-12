import styled from "styled-components";
import { logoTextStyle } from "../../utils/fonts";
import { color } from "../../utils/styles";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${color.primary};
  ${logoTextStyle}
  font-size: 36px;
`;
