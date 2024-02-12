import styled from "styled-components";
import { bodyTextStyle } from "../../shared/utils/fonts";
import { color } from "../../shared/utils/styles";

export const SearchInput = styled.div`
  width: 400px;
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  box-sizing: border-box;
  padding-bottom: 16px;
`;

export const SearchResultsSectionTitle = styled.div`
  ${bodyTextStyle}
  color: ${color.textGray}
`;

export const SearchResultsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;
`;
