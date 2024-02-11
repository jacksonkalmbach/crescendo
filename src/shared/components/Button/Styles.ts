import styled, { css } from "styled-components";
import { color } from "../../utils/styles";

interface StyledButtonProps {
  isActive: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 8px 12px;
  border-radius: 9999px;
  border: none;
  white-space: nowrap;
  transition: all 0.1s;
  appearance: none;
  cursor: pointer;
  ${(props) =>
    props.isActive && `background-color: ${color.primary}; color: white;`};
  &:active {
    transform: scale(0.9);
  }
`;
