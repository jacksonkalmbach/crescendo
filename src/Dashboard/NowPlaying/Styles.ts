import styled from "styled-components";
import { color } from "../../shared/utils/styles";

export const NowPlayingContainer = styled.div`
  height: 100vh;
  width: 400px;
  box-sizing: border-box;
  padding: 24px;
  border-left: 1px solid ${color.borderLight};
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const SectionHeader = styled.header``;
