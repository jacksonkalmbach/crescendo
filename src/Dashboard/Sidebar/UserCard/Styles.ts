import styled from "styled-components";
import { color } from "../../../shared/utils/styles";

export const StyledUserCard = styled.div`
  display: flex;
  padding: 12px 16px;
  border-radius: 16px;
  gap: 8px;
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
