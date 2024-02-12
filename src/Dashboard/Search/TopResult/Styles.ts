import styled from "styled-components";
import { color, sizes } from "../../../shared/utils/styles";
import { bodyTextStyle } from "../../../shared/utils/fonts";

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

export const TopResultText = styled.div`
  ${color.textGray};
  ${bodyTextStyle};
  ${sizes.bodyFont}px;
`;

export const TopResultTitle = styled.div`
  ${bodyTextStyle}
  font-weight: 600;
  padding: 0;
  font-size: 24px;
`;
