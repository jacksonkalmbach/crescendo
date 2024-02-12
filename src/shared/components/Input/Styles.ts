import styled from "styled-components";
import { color, sizes } from "../../utils/styles";
import { bodyTextStyle } from "../../utils/fonts";

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 32px;
  width: 100%;
  border: ${sizes.borderWidth}px solid ${color.borderLight};
  border-radius: 9999px;
  padding: 8px;
`;

export const InputElement = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  transition: background 0.1s;
  ${bodyTextStyle}
`;
