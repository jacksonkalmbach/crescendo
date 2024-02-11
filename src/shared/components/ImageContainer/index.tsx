import { StyledImageContainer, StyledImage } from "./Styles";

const ImageContainer = ({
  url,
  mediaType,
}: {
  url: string;
  mediaType: string;
}) => {
  return (
    <StyledImageContainer mediaType={mediaType}>
      <StyledImage src={url} />
    </StyledImageContainer>
  );
};

export default ImageContainer;
