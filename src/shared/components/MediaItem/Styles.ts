import styled from "styled-components";
import { color, sizes } from "../../utils/styles";
import { bodyTextStyle } from "../../utils/fonts";

export const StyledMediaItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 16px;
  justify-content: space-between;
  &:hover {
    background-color: ${color.backgroundPrimaryLight};
  }
`;

export const ArtTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  ${bodyTextStyle}
`;

export const TitleText = styled.div`
  font-weight: bold;
  font-size: ${sizes.bodyFont}px;
`;

export const SubTitleText = styled.div`
  color: ${color.textGray};
  font-size: ${sizes.smallBodyFont}px;
`;
