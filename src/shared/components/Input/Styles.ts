import styled from "styled-components";
import { color } from "../../utils/styles";

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 32px;
  width: 100%;
`;

export const InputElement = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 7px;
  border: ${color.borderLight};
  transition: background 0.1s;
`;
