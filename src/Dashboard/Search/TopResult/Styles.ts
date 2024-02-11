import styled from "styled-components";
import { color } from "../../../shared/utils/styles";

export const TopResultContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  background-color: ${color.backgroundPrimaryLight};
`;

export const TopResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  width: 150px;
`;
