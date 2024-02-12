import styled from "styled-components";
import { color } from "../../../shared/utils/styles";
import { bodyTextStyle } from "../../../shared/utils/fonts";

export const StyledUserCard = styled.div`
  display: flex;
  padding: 12px 16px;
  border-radius: 16px;
  align-items: center;
  gap: 8px;
  ${bodyTextStyle}
  font-size: 14px;
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
