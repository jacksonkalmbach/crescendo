import styled from "styled-components";

interface StyledImageContainerProps {
  mediaType: string;
}

export const StyledImageContainer = styled.div<StyledImageContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  overflow: hidden;
  ${(props) =>
    props.mediaType === "song" || props.mediaType === "user"
      ? "border-radius: 9999px;"
      : "border-radius: 8px;"}
  height: 48px;
  width: 48px;
`;

export const StyledImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
