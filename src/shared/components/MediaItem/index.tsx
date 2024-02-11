import { useState } from "react";
import CircleImage from "../CircleImage";
import Button from "../Button";
import {
  ArtTextContainer,
  StyledMediaItem,
  SubTitleText,
  TextContainer,
  TitleText,
} from "./Styles";

interface MediaItemProps {
  title: string;
  subTitle: string;
  mediaImgUrl: string;
}

const MediaItem = ({ title, subTitle, mediaImgUrl }: MediaItemProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <StyledMediaItem>
      <ArtTextContainer>
        <CircleImage url={mediaImgUrl} />
        <TextContainer>
          <TitleText>{title}</TitleText>
          <SubTitleText>{subTitle}</SubTitleText>
        </TextContainer>
      </ArtTextContainer>
      <Button isActive={isSelected} onClick={() => setIsSelected(!isSelected)}>
        Play
      </Button>
    </StyledMediaItem>
  );
};

export default MediaItem;
