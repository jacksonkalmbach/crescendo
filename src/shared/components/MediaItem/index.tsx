import { useState } from "react";
import CircleImage from "../ImageContainer";
import Button from "../Button";
import {
  ArtTextContainer,
  StyledMediaItem,
  SubTitleText,
  TextContainer,
  TitleText,
} from "./Styles";
import ImageContainer from "../ImageContainer";
import MediaItemSkeleton from "./MediaItemSkeleton";

interface MediaItemProps {
  title: string;
  subTitle: string;
  mediaType: string;
  mediaImgUrl: string;
}

const MediaItem = ({
  title,
  subTitle,
  mediaType,
  mediaImgUrl,
}: MediaItemProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (isLoading) return <MediaItemSkeleton />;

  return (
    <StyledMediaItem>
      <ArtTextContainer>
        <ImageContainer url={mediaImgUrl} mediaType={mediaType} />
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
