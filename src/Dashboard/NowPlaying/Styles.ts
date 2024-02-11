import styled from "styled-components";
import { color, sizes } from "../../shared/utils/styles";

export const NowPlayingContainer = styled.div`
  height: 100vh;
  width: 500px;
  box-sizing: border-box;
  border-left: ${sizes.borderWidth}px solid ${color.borderLight};
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const HeaderImageContainer = styled.div`
  height: 200px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const ImageContainer = styled.img`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
