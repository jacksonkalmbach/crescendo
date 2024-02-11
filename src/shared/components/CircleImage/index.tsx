import { CircleImageContainer, ImageContainer } from "./Styles";

const CircleImage = ({ url }: { url: string }) => {
  return (
    <CircleImageContainer>
      <ImageContainer src={url} />
    </CircleImageContainer>
  );
};

export default CircleImage;
